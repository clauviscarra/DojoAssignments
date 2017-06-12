var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/messageBoard');

var Schema = mongoose.Schema;

var PostSchema = new Schema({
    name: { type: String, required: true, minlength: 4},
    text: { type: String, required: true },
    _comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
}, { timestamps: true })
var CommentSchema = new Schema({
    _post: { type: Schema.Types.ObjectId, ref: 'Post' },
    name: { type: String, required: true, minlength:4},
    text: { type: String, required: true },
}, { timestamps: true })


//Register models
mongoose.model('Post', PostSchema);
mongoose.model('Comment', CommentSchema);

var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment')



//Routes
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
  //find post the comment belongs to
    Post.findOne({ '_id': req.params.id }, function(err, post) {
  //create a comment using data from form
        var comment = new Comment(req.body);
  //set the reference like this

        comment._post = post._id;
  //the comment now belongs to the post we found above

        comment.save(function(err) {
  //push the comment into the comments array of the post we found
            post._comments.push(comment);
  //save updated post
            post.save(function(err) {
                if (err) {
                    console.log('Make sure name/comment is inserted!');
                    res.redirect('/')
                } else {
                    console.log(post);
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
