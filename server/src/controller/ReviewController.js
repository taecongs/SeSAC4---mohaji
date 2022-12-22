const models = require("../model");

exports.writeComment = async (req, res) => {

    console.log(req.body);
    console.log(req.file);

    const {user_id, event_id, score, content} = req.body;

    let obj = {
        user_id : user_id,
        event_id : event_id,
        score : score,
        content : content
    }

    const result = await models.Review.create(obj);
    if (req.file != undefined) {
        const img_result = await models.ReviewImg.create({review_id : result.id, filename : req.file.filename})
    }
    res.send(true);
}

exports.getComment = async (req, res) => {
    // 상세페이지 내 댓글 불러오기
    if (req.query.user_id == undefined) {

        const result = await models.Review.findAll({where : {event_id : req.query.event_id}});

        let img = [];
        for (let i=0; i < result.length; i++) {
            const img_result = await models.ReviewImg.findOne({where : {review_id : result[i].id}});
            if (img_result != undefined) {
                img.push(img_result.filename);
            } else {
                img.push(false)
            }
        }

        res.send({result : result, filename : img});
    // 마이페이지 댓글 불러오기
    } else {

        const result = await models.Review.findAll({where : {user_id : req.query.user_id}});

        let img = [];
        let title = [];
        for (let i=0; i < result.length; i++) {
            const title_result = await models.Event.findOne({where : {id : result[i].event_id}});
            const img_result = await models.ReviewImg.findOne({where : {review_id : result[i].id}});
            title.push(title_result.title)
            if (img_result != undefined) {
                img.push(img_result.filename);
            } else {
                img.push(false);
            }
        }

        res.send({result : result, filename : img, title : title});
    }
}

exports.deleteComment = async (req, res) => {
    const result = await models.Review.destroy({where : {id : req.body.id}});
    res.send(true);
}