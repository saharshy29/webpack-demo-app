import { run } from './app/app.js';
import { AlertService } from './app/services/alert';
import { ComponentService } from './app/services/component';

const alertService = new AlertService();
const componentService = new ComponentService();

run(alertService, componentService);