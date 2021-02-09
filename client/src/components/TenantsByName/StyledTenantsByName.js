import styled from 'styled-components';

const StyledTenantsByName = styled.div`
    & > .tenant-list {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: flex-start;
        padding: 2rem 5rem 0;
        gap: 1rem;
    }
`;

export default StyledTenantsByName;