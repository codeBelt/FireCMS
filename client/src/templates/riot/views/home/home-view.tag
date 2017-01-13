<home-view>

    <form ref="form">
        <div class="form-group">
            <label for="title">Title</label>
            <input type="text" class="form-control" id="title" name="title" aria-describedby="emailHelp" placeholder="Enter Title">
        </div>
        <div class="form-group">
            <label for="url">Url</label>
            <input type="text" class="form-control" id="url" name="url" placeholder="Url">
        </div>
        <div class="form-group">
            <label for="body">Body</label>
            <textarea class="form-control" id="body" name="body" rows="5"></textarea>
        </div>
        <div class="form-check">
            <button type="submit" class="btn btn-primary">Submit</button>
    </form>

    <script>
//        import { form2js } from 'form2js';
        //--------------------------------------------------------------------------------
        // PROPERTIES
        //--------------------------------------------------------------------------------

        //--------------------------------------------------------------------------------
        // METHODS
        //--------------------------------------------------------------------------------
        this.refresh = () => {
            const type = 0;
            this.update();
        };

        this.onChange = event => {
            this.refresh();
        };

        this.onSubmit = event => {
            event.preventDefault();

//            const formData = form2js(this.refs.form, '.', false);

//            console.log(`formData`, formData);
        };

        //--------------------------------------------------------------------------------
        // LISTENERS
        //--------------------------------------------------------------------------------
        this.on('mount', () => {
            if (this.refs.form) {
                this.refs.form.addEventListener('submit', this.onSubmit);
            }
        });

        this.on('unmount', () => {
            if (this.refs.form) {
                this.refs.form.removeEventListener('submit', this.onSubmit);
            }
        });
    </script>
</home-view>
