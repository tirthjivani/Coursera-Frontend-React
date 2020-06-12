import * as ActionTypes from './actionTypes';
import { baseUrl } from '../shared/baseUrl';

/**
 * This is a action creator which return an action object of Comment
 * @param {*} dishId 
 * @param {*} rating 
 * @param {*} author 
 * @param {*} comment 
 */
export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

/**
 * This is a thunk
 * @param {*} dishId 
 * @param {*} rating 
 * @param {*} author 
 * @param {*} comment 
 */
export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    var newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        head: {
            'Content-type': 'application/json',
        },
        credentials: 'same-origin'
    }).then(response => {
        if (response.ok)
            return response;
        else {
            var err = new Error("Error : " + response.status + " : " + response.statusText);
            err.response = response;
            throw err;
        }
    }, error => {
        var errMsg = new Error(error.message);
        throw errMsg;
    })
        .then(response => response.json())
        .then(response => dispatch(addComment(response)))
        .catch(error => {
            console.log(error);
        })
}



/**
 * This is a thunk.
 * This is a function which returns a function. 
 */
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading());

    return fetch(baseUrl + 'dishes')
        .then(response => {
            if (response.ok)
                return response;
            else {
                var err = new Error("Error : " + response.status + " : " + response.statusText);
                err.response = response;
                throw err;
            }
        }, error => {
            var errMsg = new Error(error.message);
            throw errMsg;
        })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error)))
}


/**
 * Action object
 */
export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

/**
 * 
 * @param {*} dishes 
 */
export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
})

/**
 * Action object
 * @param {*} errmsg 
 */
export const dishesFailed = (errmsg) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmsg
})



/**
 * This is a thunk.
 */
export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
        .then(response => {
            if (response.ok)
                return response;
            else {
                var err = new Error("Error : " + response.status + " : " + response.statusText);
                err.response = response;
                throw err;
            }
        },
            error => {
                var errMsg = new Error(error.message);
                throw errMsg
            })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error)));
};

/**
 * Action Object
 * @param {*} errmess 
 */
export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

/**
 * Action Object
 * @param {*} comments 
 */
export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

/**
 * This is a thunk
 */
export const fetchPromos = () => (dispatch) => {

    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions')
        .then(response => {
            if (response.ok)
                return response;
            else {
                var err = new Error("Error : " + response.status + " : " + response.statusText);
                err.response = response;
                throw err;
            }
        },
            error => {
                var errMsg = new Error(error.message);
                throw errMsg
            })
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});

export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading());

    return fetch(baseUrl + 'leaders')
        .then(response => {
            if (response.ok)
                return response;
            else {
                var err = new Error("Error : " + response.status + " : " + response.statusText);
                err.response = response;
                throw err;
            }
        },
            error => {
                var errMsg = new Error(error.message);
                throw errMsg
            })
        .then(response => response.json())
        .then(leaders => dispatch(addLeaders(leaders)))
        .catch(error => dispatch(leadersFailed(error)))
}

export const leadersFailed = (errmess) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errmess
});

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});

export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
});

export const postFeedback = (firstname, lastname, telnum, email, message) => (dispatch) => {
    var newFeedback = {
        firstname: firstname,
        lastname: lastname,
        telnum: telnum,
        email: email,
        message: message,
        date: new Date().toISOString()
    }

    return fetch(baseUrl + 'feedback', {
        method: 'POST',
        body: JSON.stringify(newFeedback),
        headers: {
            'content-type': 'application/json'
        },
        credentials: 'same-origin'
    }).then(response => {
        if (response.ok)
            return response;
        else {
            var err = new Error("Error : " + response.status + " : " + response.statusText);
            err.response = response;
            throw err;
        }
    }, error => {
        var errMsg = new Error(error.message);
        throw errMsg;
    })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            alert(JSON.stringify(response))
        })
        .catch(error => {
            console.log(error);
        })
}

