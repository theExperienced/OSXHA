import { useMutation, queryCache } from 'react-query';
import _ from 'lodash';

import { createTenant } from '../api/tenant';



const useCreateTenant = () => {
    const { mutate, status } = useMutation(createTenant, {
        // onMutate: ({ todo, isDone }) => {
        //     queryCache.cancelQueries('todos');
        //     const currentTodos = queryCache.getQueryData('todos');
        //     queryCache.setQueryData('todos', currentData => {
        //         const newQueryData = makeToggledTodos(currentData, todo, isDone);
                    
        //         return newQueryData; 
        //     });
            
        //     return currentTodos;
        // },
        // onError: (err, newTodo, rollback) => {
        //     console.log('REACT QUERY ERROR', err, newTodo, rollback)
        // },
        // onSettled: () => {
        //     queryCache.refetchQueries('todos');
        // },
    });

    return { mutateCreateTenant: mutate, mutationState: status };
};

export default useCreateTenant;