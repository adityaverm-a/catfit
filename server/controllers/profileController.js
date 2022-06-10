const asyncHandler = require('express-async-handler')

const updateUserProfile = asyncHandler(async (req, res) => {

    const UserExists = await User.findOne(req.params.id)

    if(!UserExists) {
        res.status(401)
        throw new Error('Something went wrong, try again later! or contact catfit team!')
    }

    const {
        contactNumber,
        plan,
        catName,
        catAge,
        catWeight,
        catDocument,
        cleaningLitter,
        playTime,
        waterIntake,
        combingTime
    } = req.body;

    const userInfo = {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
    };

    userInfo.profile = {};
    if(contactNumber) userInfo.profile.contactNumber = contactNumber;
    if(plan) userInfo.profile.plan = plan;
    if(catName) userInfo.profile.catName = catName;
    if(catAge) userInfo.profile.catAge = catAge;
    if(catWeight) userInfo.profile.catWeight = catWeight;
    if(catDocument) userInfo.profile.catDocument = catDocument;

    userInfo.profile.catHabitsTracking = {};
    if(cleaningLitter) userInfo.profile.cleaningLitter = cleaningLitter;
    if(playTime) userInfo.profile.playTime = playTime;
    if(waterIntake) userInfo.profile.waterIntake = waterIntake;
    if(combingTime) userInfo.profile.combingTime = combingTime;

    const user = await User.findOneAndUpdate(
        {id: req.params.id}, 
        {$set: userinfo}
    ).select('-password')

    console.log(user);

    if(user) {
        res.status(201).json(user)
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

