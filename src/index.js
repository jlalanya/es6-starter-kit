import { project, showProject } from './projectView';
import { initAdapter } from '../designpatterns/adapter/testTarget';

project.projectId = 8000;

showProject();
initAdapter("todo", "12, 6");
initAdapter("otherSetting", "13");

console.log(project.projectId);
