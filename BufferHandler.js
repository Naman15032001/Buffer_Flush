
const fs = require('fs');

class BufferHandler {
  constructor(api_simulator) {
    //this.MAX_BUFFER_SIZE = 100 * 1024 * 1024; // 100MB
    this.MAX_BUFFER_SIZE = 100 // for testing
    this.buffer = '';
    this.buffer_length = 0;
    this.api_simulator = api_simulator
  }

  async fetch_data_from_api() {
    return this.api_simulator.do_get_req()
  }

  handle_data(data) {
    const json_data = JSON.stringify(data) + '\n';
    const data_length = Buffer.byteLength(json_data);

    if (this.buffer_length + data_length > this.MAX_BUFFER_SIZE) {
      this.flush_buffer_to_file();
    }

    this.buffer += json_data;
    this.buffer_length += data_length;
  }

  flush_buffer_to_file() {
    if (this.buffer_length === 0) return;
    fs.appendFileSync('logs.json', this.buffer, 'utf-8');
    console.log('flushing buffer ....');
    this.buffer = ''; // Clear buffer after writing
    this.buffer_length = 0;
  }


  async fetch_data_and_handle() {
    const data = await this.fetch_data_from_api();
    this.handle_data(data);
  }
}

module.exports = BufferHandler


