<route-handler>
    <div data-is="{tagname}"></div>

    <script>
        // Based on https://github.com/crisward/riot-routehandler/
        import page from 'page';
        import riot from 'riot';
        import RouteAction from 'actions/RouteAction';

        this.on('mount', () => {
            this.tagStack = [];

            this.onMount(opts.routes, opts.options);
        });

        this.onMount = (routes, options) => {
            if (routes != null) {
                this.findRoute(null, routes);

                if (options != null && options.base != null) {
                    page.base(options.base);
                    delete options.base;
                }
                page(options);
            }
        };

        this.findRoute = (parents, routes) => {
            const parentpath = this.makePath(parents);

            routes.forEach(route => {
                const mainroute = (parentpath + route.route).replace(/\/\//g, '/');
                let subparents = null;

                if (route.use != null && typeof route.use === 'function') {
                    this.setRouteUse(route, mainroute);
                }

                if (route.tag != null) {
                    subparents = parents ? parents.slice() : [];
                    subparents.push(route);
                    this.setRouteTag(route, mainroute, subparents);
                }

                if (route.routes) {
                    this.findRoute(subparents, route.routes);
                }
            });
        };

        this.makePath = parts => {
            let path = '';
            if (parts != null) {
                path = parts
                    .map(p => p.route)
                    .join('')
                    .replace(/\/\//g, '/');
            }
            return path;
        };

        this.setRouteUse = (route, mainroute) => {
            page(mainroute, (ctx, next) => {
                // This code below causes performance issues
                // Seems to be that the same unmount procedure can be called twice (also in setRouteTag())
                //if (mainroute !== '*') { // don't call unmount with wild
                //     this.unmountTags([route], ctx);
                //}

                route.use(ctx, next, page);
            });
        };

        this.setRouteTag = (route, mainroute, subparents) => {

            page(mainroute, (ctx, next) => {
                this.unmountTags(subparents, ctx);

                if (route.routes != null) {
                    const len = route.routes.filter(r => r.route === '/').length;
                    if (len > 0) {
                        next();
                    }
                }

                // Call after we're completely done with the route change
                this.onRouteComplete(route, ctx);
            });
        };

        this.unmountTags = (tree, ctx) => {
            delete opts.routes;
            opts.page = page;
            opts.params = ctx.params;

            let nexttag;
            let tag = this;
            let idx;

            for (idx = 0; idx < tree.length; idx++) {
                let route = tree[idx];

                if (this.tagStack[idx] && this.tagStack[idx].tagname === route.tag) {
                    nexttag = this.tagStack[idx].nexttag;

                    // Don't need to forcefully update tags here,
                    // We assume the sequence of action->store->tag will update the presentation layer
                    //riot.update();
                } else if (tag != null && route != null && route.tag != null) { //don't mount middleware
                    nexttag = tag.setTag(route.tag, opts);
                }

                this.tagStack[idx] = {
                    tagname: route.tag,
                    nexttag: nexttag,
                    tag: tag,
                };

                if (nexttag != null) {
                    if (nexttag[0] != null) {
                        tag = nexttag[0].tags['route-handler'];
                    }
                }

                if (tag == null) {
                    if (nexttag[0] != null) {
                        tag = nexttag[0].root.querySelector('route-handler')
                    }
                }
            }

            while (idx < this.tagStack.length) {
                const removeTag = this.tagStack.pop();
                removeTag.nexttag[0].unmount(true);
            }
        };

        // Called after we're completely done with the route change
        this.onRouteComplete = (route, ctx) => {
            RouteAction.meta({ title: route.title });
            RouteAction._current(ctx.path, ctx.params, ctx.querystring, ctx.hash);    
        };

        // returns the inner content element
        // Eg: <div data-is="">
        this.getContentElement = () => {
            return this.root.childNodes[0];
        };

        // Riot does not automatically clear the
        // properties for a tag after re-mounting it,
        // so we do it manually here
        this.clearContentElement = () => {
            const node = this.getContentElement();
            node.removeAttribute('class');
            node.removeAttribute('style');
        };

        this.setTag = (tagname, routeopts) => {
            this.clearContentElement();
            this.update({ tagname });
            return riot.mount(tagname, routeopts);
        };
    </script>

</route-handler>
