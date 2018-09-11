const initialState = {
    photos: [],
    sortDirection: "UNORDERED"
}

const ACTION_TYPES = {
    FETCH_PHOTOS_FULFILLED: "FETCH_PHOTOS_FULFILLED",
    SORT_PHOTOS_ASCENDING: 'SORT_PHOTOS_ASCENDING',
    SORT_PHOTOS_DESCENDING: 'SORT_PHOTOS_DESCENDING',
}

function comparStrings(str1, str2) {
    if (str1 === str2) {
        return 0
    }
    if (str1 < str2) {
        return -1
    }
    if (str1 > str2) {
        return 1
    }
}

export function photosReducer(state = initialState, action) {
    switch(action.type){
        case ACTION_TYPES.FETCH_PHOTOS_FULFILLED: {
            return {
                ...state,
                photos: action.photos.slice(0, 100)
            }
        }
        case ACTION_TYPES.SORT_PHOTOS_ASCENDING: {
            return {
                ...state,
                photos: [...state.photos].sort((a, b) => comparStrings(a.title, b.title)),
                sortDirection: "ASC"
            }
        }
        case ACTION_TYPES.SORT_PHOTOS_DESCENDING: {
            return {
                ...state,
                photos: [...state.photos].sort((a, b) => comparStrings(b.title, a.title)),
                sortDirection: "DESC"
            }
        }
        default: {
            return state
        }
    }
}


export function fetchPhotosFulfilled(photos) {
    return {
        type: ACTION_TYPES.FETCH_PHOTOS_FULFILLED,
        photos
    }
}

export function sortPhotosAscending() {
    return {
        type: ACTION_TYPES.SORT_PHOTOS_ASCENDING
    }
}

export function sortPhotosDescending() {
    return {
        type: ACTION_TYPES.SORT_PHOTOS_DESCENDING
    }
}

