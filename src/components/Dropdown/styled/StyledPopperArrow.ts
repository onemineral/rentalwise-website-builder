import styled, { css } from 'styled-components';

export const StyledPopperArrow = styled.div<any>(({ $alignment }: any) => [
    $alignment === 'left' &&
        css`
            left: calc(25% - 5px);
        `,

    $alignment === 'right' &&
        css`
            right: calc(25% - 5px);
        `,

    css`
        position: absolute;

        :before {
            display: block;
            width: 0px;
            height: 0px;
            content: '';
            border-width: 5px;
            border-style: solid;
            border-color: transparent;
            border-image: initial;
            margin: auto;
        }

        &[data-placement*='top'] {
            top: 100%;

            :before {
                border-top-color: #ffffff;
            }
        }
        &[data-placement*='bottom'] {
            bottom: 100%;

            :before {
                border-bottom-color: #ffffff;
            }
        }

        &[data-placement*='left'] {
            left: 100%;

            :before {
                border-left-color: #ffffff;
            }
        }
        &[data-placement*='right'] {
            right: 100%;

            :before {
                border-right-color: #ffffff;
            }
        }
    `,
]);
