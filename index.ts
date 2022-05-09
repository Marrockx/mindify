 
 const checkbox = document.querySelector('input[name=mode]') as HTMLInputElement;

        checkbox.addEventListener('change', handleEvent);

        let trans = ():number | void => {
            document.documentElement.classList.add('transition');
            window.setTimeout(() => {
                document.documentElement.classList.remove('transition');
            }, 1000)
        }
        
        
        
        function handleEvent():void {
            if(checkbox.checked) {
                trans()
                document.documentElement.setAttribute('data-theme', 'dark')
            } else {
                trans()
                document.documentElement.setAttribute('data-theme', 'light')
            }

        }