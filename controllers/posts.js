const handleSuccess = require('../service/handleSuccess');
const errorHandle = require('../service/errorHandle');

const posts = require('../model/posts')

const post = {
    async getPosts(req, res) {
        const allPosts = await posts.find();
        handleSuccess(res, allPosts)
    },
    async createPosts(req, res) {
        try {
            const data = req.body;
            if (data.name) {
                const newPost = await posts.create(
                    {
                        name: data.name,
                        content: data.content,
                        tags: data.tags,
                        type: data.type,
                        likes: data.likes,
                        comments: data.comments
                    }
                );
                handleSuccess(res, newPost);
            } else {
                errorHandle(res);
            }
        } catch (error) {
            errorHandle(res);
        }
    },
    async deleteAll(req, res) {
        const deleteAllPosts = await posts.deleteMany({});
        handleSuccess(res, deleteAllPosts);
    },
    async deleteOne(req, res) {
        const id = req.params.id
        try {
            const findId = await posts.findOne({ '_id': id })
            if (findId === null) {
                errorHandle(res);
            } else {
                const deleteById = await posts.findByIdAndDelete(id);
                handleSuccess(res, deleteById);
            }
        } catch (error) {
            errorHandle(res);
        }
    },
    async updataOne(req, res) {
        const id = req.params.id
        try {
            const data = req.body;
            if (data.name) {
                const newPost = await posts.updateOne(
                    {
                        '_id': id
                    },
                    {
                        name: data.name,
                        content: data.content,
                        tags: data.tags,
                        type: data.type,
                        likes: data.likes,
                        comments: data.comments
                    }
                );
                handleSuccess(res, newPost);
            } else {
                errorHandle(res);
            }
        } catch (error) {
            errorHandle(res);
        }
    }
}

module.exports = post;