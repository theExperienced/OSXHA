import { useMutation, queryCache } from 'react-query';
import _ from 'lodash';

import { signUp } from '../api/user';
import { makeUserdTodos } from '../utils';


const useSignUp = () => {
    const [ mutateUser, userState ] = useMutation(signUp, {
        onMutate: ({ name, password }) => {
            queryCache.cancelQueries('todos');
            const currentTodos = queryCache.getQueryData('todos');
            queryCache.setQueryData('todos', currentData => {
                const newQueryData = makeUserdTodos(currentData, todo, isDone);
                    
                return newQueryData; 
            });
            
            return currentTodos;
        },
        onError: (err, newTodo, rollback) => {
            console.log('REACT QUERY ERROR', err, newTodo, rollback)
        },
        onSettled: () => {
            queryCache.refetchQueries('todos');
        },
    });

    return { mutateUser, userState };
};

export default useSignUp;