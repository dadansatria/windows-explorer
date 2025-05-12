
export type File = {
    id: number;
    name: string;
    folderId: number;
};

export type Folder = {
    id: number;
    name: string;
    parentId: number;
};

export type ApiResponse<T> = {
    status: number;
    data: {
        success: boolean;
        data: T;
    };
};

export type EdenApi = {
    '/api/v1/files': {
        get: (params: { query: { folderId?: string; q?: string } }) => Promise<ApiResponse<File[]>>;
        post: (body: Omit<File, 'id'>) => Promise<ApiResponse<File>>;
    };
    '/api/v1/files/:id': {
        put: (body: Partial<Omit<File, 'id'>>) => Promise<ApiResponse<File>>;
        delete: () => Promise<ApiResponse<null>>;
    };
    '/api/v1/folders': {
        get: (params?: { query: { parentId?: string; q?: string } }) => Promise<ApiResponse<Folder[]>>;
        post: (body: Omit<Folder, 'id'>) => Promise<ApiResponse<Folder>>;
    };
    '/api/v1/folders/:id': {
        put: (body: Partial<Omit<Folder, 'id'>>) => Promise<ApiResponse<Folder>>;
        delete: () => Promise<ApiResponse<null>>;
    };
}; 