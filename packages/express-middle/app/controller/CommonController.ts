import express from 'express';

class Controller{ 
    public application : express.Application

    constructor(){
        this.application = express()
        this.router()
    }

    private router(): void{ 
        this.application.get('/',(req: express.Request, res: express.Response) => {
            res.send('HELLO_WORLD')
        })
    }
}

export default Controller;