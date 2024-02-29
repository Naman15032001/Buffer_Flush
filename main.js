const BufferHandler = require('./BufferHandler');
const APISimulator = require('./api_simulater');

class Buffer_Flush_Controller{

    constructor(){
        this.ap = new APISimulator();
        this.bh = new BufferHandler(this.ap);
    }

    // 50 clients per sec  
    // Currently api calls are synchronous for testing 
    run(){
        setInterval(() => {
            for (let i = 0; i < 5; i++) {
                this.bh.fetch_data_and_handle(this.ap); 
            }
        } , 1000 )
    }

}

// main -> entry point
function main() {
    let BFC = new Buffer_Flush_Controller();
    BFC.run()
}

main();