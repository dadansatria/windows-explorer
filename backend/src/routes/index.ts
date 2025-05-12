//import elysia
import { Elysia } from 'elysia';

//import controller
import { get as getFolders } from '@/controllers/FolderController';
import { get as getFiles } from '@/controllers/FileController';

const Routes = new Elysia();

// API v1 group
const v1 = new Elysia({ prefix: '/v1' });

v1
    .get('/folders', ({ query: { parentId, q } }) => getFolders(String(parentId), String(q)))
    .get('/files', ({ query: { folderId, q } }) => getFiles(String(folderId), String(q)))

// Mount v1 routes
Routes.use(v1);

export default Routes;