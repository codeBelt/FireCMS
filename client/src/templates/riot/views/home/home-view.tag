<home-view>

    <div>Test</div>

    <script>
        //--------------------------------------------------------------------------------
        // PROPERTIES
        //--------------------------------------------------------------------------------

        //--------------------------------------------------------------------------------
        // METHODS
        //--------------------------------------------------------------------------------
        this.refresh = () => {
            // Get TypeScript working.
            let num = 0;

            this.update();
        };

        this.onChange = event => {
            this.refresh();
        };

        //--------------------------------------------------------------------------------
        // LISTENERS
        //--------------------------------------------------------------------------------
        this.on('mount', () => {
            this.refresh();
        });

        this.on('unmount', () => {
        });
    </script>
</home-view>
