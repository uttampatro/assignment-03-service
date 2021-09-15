export interface BlogDTO {
    title: string;
    article: string;
    date: Date;
}

export interface CreateBlogDTO {
    title: string;
    article: string;
    userId: string;
}
