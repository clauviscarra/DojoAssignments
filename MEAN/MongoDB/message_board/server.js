var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/messageBoard');

var Schema = mongoose.Schema;

var PostSchema = new Schema({
    name: { type: String, required: true},
    text: { type: String, required: true },
    _comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
}, { timestamps: true })
var CommentSchema = new Schema({
    _post: { type: Schema.Types.ObjectId, ref: 'Post' },
    name: { type: String, required: true},
    text: { type: String, required: true },
}, { timestamps: true })



mongoose.model('Post', PostSchema);
mongoose.model('Comment', CommentSchema);

var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment')


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    Post.find({}).populate('_comments').exec(function(err, post) {
        res.render('index', { post:post });
    })
})

app.post('/new', function(req, res) {
    var post = new Post(req.body);
    post.save(function(err) {
        if (err) {
            console.log('Make sure name/comment is inserted!')
            res.redirect('/')
        } else {
          console.log('succesfully added message');
            res.redirect('/')
        }
    });
})

app.post('/new/:id', function(req, res) {
    Post.findOne({ '_id': req.params.id }, function(err, post) {
        var comment = new Comment(req.body);
        comment._post = post._id;
        comment.save(function(err) {
            post._comments.push(comment);
            post.save(function(err) {
                if (err) {
                    console.log('Make sure name/comment is inserted!');
                    res.redirect('/')
                } else {
                    console.log(post._id);
                    console.log(comment._post);
                    console.log(post._comments);
                    console.log(comment.text);
                    console.log(req.body.name);
                    res.redirect('/');
                }
            })
        })
    })
})


// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
