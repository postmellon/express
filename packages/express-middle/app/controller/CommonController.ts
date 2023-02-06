import express from 'express'

/**
 * test
 * @author jeremyOh
 */
class Controller {
  public application: express.Application

  constructor() {
    this.application = express()
    this.router()
  }

  /**
   * @author jeremyOh
   */
  private router(): void {
    this.application.get('/', (req: express.Request, res: express.Response) => {
      res.send('HELLO_WORLD')
    })
  }
}

export default Controller
