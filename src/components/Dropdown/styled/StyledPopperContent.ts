import styled, { css } from 'styled-components';

export const StyledPopperContent = styled.div<any>(() => [
    css`
        z-index: 10;

        &[data-placement*='top'] {
            margin-bottom: 5px;
        }
        &[data-placement*='bottom'] {
            margin-top: 5px;
        }
        &[data-placement*='left'] {
            margin-right: 5px;
        }
        &[data-placement*='right'] {
            margin-left: 5px;
        }
    `,
]);
