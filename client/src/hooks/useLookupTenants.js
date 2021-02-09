import { useQuery } from 'react-query';
import { lookupTenants } from '../api/tenant';


const useLookupTenants = tenantName => {
    // const [ errorCount, setErrorCount ] = useState(0);
    // const [ newError, setNewError ] = useState(null);

    // useEffect(() => {
    //     if(errorCount > 3) {
    //         setNewError('error fetching todos');
    //         setErrorCount(0);
    //     }
    // }, [errorCount]);
    // console.log('USELOOKUP TENANTS', tenantName)

    const query = useQuery(['tenant', tenantName], lookupTenants, {
        refetchAllOnWindowFocus: false, 
        onError: err => {
            // setErrorCount(prev => prev++);
        }
    });

    return { ...query };
    // return { ...query, newError };
};

export default useLookupTenants;