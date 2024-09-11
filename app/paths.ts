const paths = {
    homePath() {
        return '/';
    },
    topicShowPath(topicSlug: string){
        return `/topics/${topicSlug}`
    },
    postCreate(topicSlug: string){
        return `/topics/${topicSlug}/posts/new`
    },
    postShow(topicSlug: string, postId: string){
        return `/topics/${topicSlug}/posts/${postId}`

    }
}

export default paths;