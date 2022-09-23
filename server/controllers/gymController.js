require("../models/database");
const Categories = require("../models/categories");
const Routine = require("../models/routine");

/*
 *Get /
 *Homepage
*/
//to use we have to export the homepage created in the gym route
exports.homepage = async(req,res) => {

    try {
        const limitNumber = 5;
        const categories = await Categories.find({}).limit(limitNumber);
        //to show latest routines from d database
        const latest = await Routine.find({}).sort({_id: -1}).limit(limitNumber);
        //show each category
        const ropes = await Routine.find({"category" : "Ropes"}).limit(limitNumber);
        const weight = await Routine.find({"category" : "Weight"}).limit(limitNumber);
        const pullups = await Routine.find({"category" : "PullUps"}).limit(limitNumber);

        const workout = { latest, ropes, weight, pullups };
        res.render("index", {title: "GymBlog - Home", categories, workout});
    } catch (error) {
        res.status(500).send({message: error.message} || "Error Occurred");
    }
    

}
//database categories
// async function insertDummyData(){
//     try {
//         //make it an array
//         Categories.insertMany([
//             {
//                 name: "Ropes",
//                 image: "/img/daniel-apodaca-WdoQio6HPVA-unsplash.jpg"
//             },
//             {
//                 name: "Pull Ups",
//                 image: "/img/daniel-apodaca-WdoQio6HPVA-unsplash.jpg"
//             },
//             {
//                 name: "Weight",
//                 image: "/img/anastase-maragos-9dzWZQWZMdE-unsplash.jpg"
//             },
//             {
//                 name: "Legs",
//                 image: "/img/scott-webb-xwMlVSqP20U-unsplash.jpg"
//             },
//             {
//                 name: "Biceps",
//                 image: "/img/edgar-chaparro-sHfo3WOgGTU-unsplash.jpg"
//             },
//             {
//                 name: "Running",
//                 image: "/img/andreea-boncota-icxORkp1Yv0-unsplash.jpg"
//             }
//         ]);
//     } catch (error) {
//         console.log(error);
//     }
// }

//insertDummyData();

/*
 *Get /categories
 *exploreCategories
*/
//to use we have to export the categories created in the gym route
exports.exploreCategories = async(req,res) => {

    try {
        const limitNumber = 11;
        const categories = await Categories.find({}).limit(limitNumber);

        res.render("categories", {title: "GymBlog - Categories", categories});
    } catch (error) {
        res.status(500).send({message: error.message} || "Error Occurred");
    }
    

}
/*
 *Get /categories/:id
 *exploreCategories
*/
exports.exploreCategoriesById = async(req,res) => {

    try {
        const categoryId = req.params.id;
        const limitNumber = 20;
        const categoryById = await Routine.find({"category": categoryId}).limit(limitNumber);

        res.render("categories", {title: "GymBlog - Categories", categoryById});
    } catch (error) {
        res.status(500).send({message: error.message} || "Error Occurred");
    }
    

}



// //routine categories
// async function insertDummyRoutineData(){
//     try {
//         //make it an array
//         Routine.insertMany([
//             {
//                 name : "Weight Lifting",
//                 description : `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//                 Tempora non velit
//                 sint officiis vel soluta hic ipsam quasi
//                 inventore, veniam asperiores quis totam eaque animi`,
//                 email: "john@gmail.com",
//                 routines: [
//                     "Raise the bar",
//                     "Jump the farm",
//                     "Work the path"
//                 ],
//                 category:  "Weight", 
//                 image: "Weight_lifting.jpg"
//             },
//             {
//                 name : "Rope Pulling",
//                 description : `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//                     Tempora non velit
//                     sint officiis vel soluta hic ipsam quasi
//                     inventore, veniam asperiores quis totam eaque animi`,
//                 email: "james@gmail.com",
//                 routines: [
//                     "Raise the bar",
//                     "Jump the farm",
//                     "Work the path"
//                 ],
//                 category: "Ropes",
//                 image: "ropes.jpg"
//             },
//             {
//                 name : "Treadmill",
//                 description : `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//                     Tempora non velit
//                     sint officiis vel soluta hic ipsam quasi
//                     inventore, veniam asperiores quis totam eaque animi`,
//                 email: "anna@gmail.com",
//                 routines: [
//                     "Raise the bar",
//                     "Jump the farm",
//                     "Work the path"
//                 ],
//                 category:  "Running",
//                 image: "treadmill.jpg"
//             },
//             {
//                 name : "PullUps",
//                 description : `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//                     Tempora non velit
//                     sint officiis vel soluta hic ipsam quasi
//                     inventore, veniam asperiores quis totam eaque animi`,
//                 email: "lora@gmail.com",
//                 routines: [
//                     "Raise the bar",
//                     "Jump the farm",
//                     "Work the path"
//                 ],
//                 category: "PullUps", 
//                 image: "Pull_ups.jpg"
//             },
//             {
//                 name : "Back WorkOut",
//                 description : `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//                     Tempora non velit
//                     sint officiis vel soluta hic ipsam quasi
//                     inventore, veniam asperiores quis totam eaque animi`,
//                 email: "john@gmail.com",
//                 routines: [
//                     "Raise the bar",
//                     "Jump the farm",
//                     "Work the path"
//                 ],
//                 category: "Biceps",
//                 image: "pullUps_Tricep.jpg"
//             }
//         ]);
//     } catch (error) {
//         console.log(error);
//     }
// }

// insertDummyRoutineData();

/*
 *Get /routine:id
 *exploreCategories
*/
//to use we have to export the categories created in the gym route
exports.exploreRoutine = async(req,res) => {

    try {
        //to find routine by id

        const routineId = req.params.id;
        const routine = await Routine.findById(routineId);

        res.render("routine", {title: "GymBlog - Routine", routine});
    } catch (error) {
        res.status(500).send({message: error.message} || "Error Occurred");
    }
    

}
/*
 *Post /search
 *Search routines
*/
exports.searchRoutine = async(req,res) => {
    try {
        const searchTerm = req.body.searchTerm;
        const search = await Routine.find({ $text: {$search: searchTerm, $diacriticSensitive: true}});
        //res.json(search);
        res.render("search", {title: "GymBlog - Search", search});
    } catch (error) {
        res.status(500).send({message: error.message} || "Error Occurred");
    }
    
}
/*
 *Get /exploreLatest
 *Explore latest routines
*/
exports.exploreLatest = async(req,res) => {
    try {
        const limitNumber = 20;
        const search = await Routine.find({}).sort({_id: -1}).limit(limitNumber);
        //res.json(search);
        res.render("explore-latest", {title: "GymBlog - Explore Latest", search});
    } catch (error) {
        res.status(500).send({message: error.message} || "Error Occurred");
    }
    
}
/*
 *Get /random
 *Random
*/
exports.exploreRandom = async(req,res) => {
    try {
        const count = await Routine.find().countDocuments();
        const random = Math.floor(Math.random() * count);
        const search = await Routine.findOne().skip(random).exec();
        //res.json(search);
        res.render("explore-random", {title: "GymBlog - Search", search});
    } catch (error) {
        res.status(500).send({message: error.message} || "Error Occurred");
    }
    
}

/*
 *Get /submit-routine
 *Submit Routine
*/
exports.submitRoutine = async(req,res) => {
    //flash is used to send failure or successful message after fillina form

    const infoErrorsObj = req.flash('infoErrors');
    const infoSubmitObj = req.flash('infoSubmit');
    res.render('submit-routine', { title: 'GymBlog - Submit Routine', infoErrorsObj, infoSubmitObj  } );
}

/*
 *Post /submit-routine
 *Submit Routine
*/
exports.submitRoutineOnPost = async(req,res) => {
    try {
        //upload an image or file
        let imageUploadFile;
        let uploadPath;
        let newImageName;

        if(!req.files || Object.keys(req.files).length === 0){
            console.log('No Files where uploaded.');
        } else {

            imageUploadFile = req.files.image;
            newImageName = Date.now() + imageUploadFile.name;

            uploadPath = require('path').resolve('./') + '/public/uploads/' + newImageName;

            imageUploadFile.mv(uploadPath, function(err){
                if(err) return res.satus(500).send(err);
            })

        }


        //add saved routine to our database
        const newRoutine = new Routine({
            name : req.body.name,
            description: req.body.description,
            email:  req.body.email,
            routines: req.body.routine,
            category: req.body.category,
            image: newImageName
        });

        await newRoutine.save();

        req.flash('infoSubmit', 'Routine has been added.');
        res.redirect('/submit-routine');
    } catch (error) {
        //res.json(error);
        req.flash('infoErrors', "Unsucessful, retry entries");
        res.redirect('/submit-routine');
    }
}

