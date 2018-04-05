import moment from 'moment';

export function sortArray (array=[], sortCriteria='pub_date') {
    return [...array].sort((a,b) => {
            if(sortCriteria === 'word_count') {
              return  a.word_count > b.word_count
            } 
            else {
                const publishedDateA = moment(a.pub_date)
                const publishedDateB = moment(b.pub_date)    
               return publishedDateB.diff(publishedDateA)
            }
        })
}
