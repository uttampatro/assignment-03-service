export interface BlogDTO {
    title: string;
    article: string;
    imageUrl: string;
    date: Date;
}

export interface CreateBlogDTO {
    title: string;
    article: string;
    imageUrl: string;
    userId: string;
}
