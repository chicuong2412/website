import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

function Alert() {
    return (
      <div class="alert alert-primary aleartEdit" role="alert">
        You need to fill in previous information first!!!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    );
}

export default Alert;