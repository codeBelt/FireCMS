<route-handler>
    <!-- element to hold the tag using <div data-is="{tagname}"> -->
    <div></div>

    <script>
        // Based on https://github.com/crisward/riot-routehandler/
        import page from 'page';
        import riot from 'riot';
        import RouteAction from 'actions/RouteAction';

        this.on('mount', () => {
            this.tagStack = [];

            this.onMount(this.opts.routes, this.opts.options);
        });

        this.onMount = (routes, options) => {
            if (routes) {
                this.findRoute(null, routes);

                if (options && options.base) {
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

                if (route.use && typeof route.use === 'function') {
                    this.setRouteUse(route, mainroute);
                }

                if (route.tag) {
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
            if (parts) {
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

                if (route.routes) {
                    const len = route.routes.filter(r => r.route === '/').length;
                    if (len > 0) {
                        next();
                    }
                }

                // Call after we're completely done with the route change
                setTimeout(() => {
                    this.onRouteComplete(route, ctx);
                }, 0);
            });
        };

        this.unmountTags = (tree, ctx) => {
            delete this.opts.routes;
            this.opts.page = page;
            this.opts.params = ctx.params;

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
                } else if (tag && route && route.tag) { // don't mount middleware
                    nexttag = tag.setTag(route.tag, this.opts);
                }

                this.tagStack[idx] = {
                    tagname: route.tag,
                    nexttag: nexttag,
                    tag: tag,
                };

                if (nexttag) {
                    if (nexttag[0]) {
                        tag = nexttag[0].tags['route-handler'];
                    }
                }

                if (!tag) {
                    if (nexttag[0]) {
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
            RouteAction.meta({
                title: route.title
            });

            RouteAction.onRouteChange({
                path: ctx.pathname,
                queryString: this.getQueryString(ctx.path),
                hash: ctx.hash,
                routeParams: ctx.params,
            });
        };

        // Can't use ctx.queryString here since there is a bug in its decoding,
        // so we extract it ourselves
        this.getQueryString = (path) => {
            let queryString = '';
            const split = path.split('?');
            if (split.length > 1) { queryString = split[1]; }
            return queryString;
        };

        this.setTag = (tagname, routeopts) => {
            const node = this.root.childNodes[0];
            node.setAttribute('data-is', tagname)
            return riot.mount(tagname, routeopts);
        };
    </script>

</route-handler>
