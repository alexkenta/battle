const User = require('mongoose').model('User');

module.exports = {
    create(req, res){
        console.log("req.body", req.body)

        login=req.body.login;
        photoUrl=req.body.avatar_url;
        score=((req.body.followers + req.body.public_repos)*12)
        
        const user = new User({
            login: login,
            photoUrl: photoUrl,
            score: score
        })

        User.findOne({login: login}, function(err, existingUser){
            if(existingUser){
                console.log("user already exists", existingUser)
            } else {
                user.save(function(err){
                    if(err){
                        res.json(err)
                    } else {
                        res.json({message:"you did it, bro!"})
                    }
                })
            }
        })

        
    },
    show(req, res){
        User.find({}, function(err, users){
            if(err){
                console.log("finding users", err)
                res.json(err)
            } else {
                res.json(users)
            }
        })
    }
}
        