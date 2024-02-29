class ApiResponseSimulater {
    constructor() {
        this.index = 0;
    }

    do_get_req() {
        const random_string = this.generate_random_string(5, 50);
        this.index++
        return {
            "id": this.index, 
            "message": random_string
        }
    }

    generate_random_string(min_length, max_length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const length = Math.floor(Math.random() * (max_length - min_length + 1)) + min_length;
        let random_string = '';
      
        for (let i = 0; i < length; i++) {
          const random_index = Math.floor(Math.random() * characters.length);
          random_string += characters[random_index];
        }
      
        return random_string;
      }
      
}

module.exports = ApiResponseSimulater;
