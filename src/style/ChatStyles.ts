import styled, { DefaultTheme } from "styled-components";

interface DefaultStyledComponent {
    theme: DefaultTheme;
}

export const Divider = styled.div<DefaultStyledComponent>`
    width: 100%;
    border-top: ${(props) => props.theme.palette.divider};
`

export const SimpleText = styled.div(({ theme }) => ({
    fontFamily: `${theme.fonts.main}`
}));

export const MainBox = styled.div(({ theme }) => ({
    display: 'flex',
    height: '100%',
    maxHeight: '100%',
    minHeight: '100%',
    position: 'relative',
    overflow: 'hidden',
    flex: '1 0',
}));

export const LeftColumn = styled.div`
    display: flex;
    height: 100%;
    max-height: 100%;
    min-height: 100%;
    position: relative;
    overflow: hidden;
    flex: 1 1 auto;
    flex-direction: column;
    min-width: 12rem;
    max-width: calc(1680px / 6);
    @media ${(props) => props.theme.breakpoints.md} {
        display: none;
    }
`


export const UsersBox = styled.div(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    borderRight: '2px solid rgba(159, 183, 197, 0.1)',
    width: 'calc(1680px / 6)',
    flex: '1 0',
    backgroundColor: `${theme.palette.primary.light}`,
    color: `${theme.palette.primary.contrastText}`,
    minHeight: '100vh',
}));

export const RightColumn = styled.div(({ theme }) => ({
    display: 'flex',
    height: '100%',
    maxHeight: '100%',
    minHeight: '100%',
    position: 'relative',
    overflow: 'hidden',
    flex: '3',
    '&::before': {
        boxSizing: 'inherit'
    }
}));

export const RightOuterBox = styled.div(({ theme }) => ({
    minWidth: '100%',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '100%',
    gridTemplateRow: '100%',
    backgroundColor: `${theme.palette.primary.dark}`,
    height: '100vh',
}));

export const RightInnerBox = styled.div(({ theme }) => ({
    flexDirection: 'column',
    gridRowStart: '1',
    gridColumnStart: '1',
    backgroundColor: '#fff',
    overflow: 'hidden',
    width: '100%',
    display: 'flex',
}));

export const RightBackgroundBox = styled.div(({ theme }) => ({
    position: 'absolute',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    overflow: 'hidden',
    backgroundColor: `${theme.palette.primary.light}`,
    boxSizing: 'inherit',
}));

export const RightBackground = styled.div(({ theme }) => ({
    backgroundImage: `${theme.type === 'light' ? 'url(assets/bg.jpeg)' : 'none'}`,
    opacity: '1',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundColor: 'inherit',
    height: '100%',
}));

export const RightHeader = styled.div(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 1rem',
    minHeight: '3.5rem',
    flex: '0 0 auto',
    userSelect: 'none',
    zIndex: 1,
    width: '100%',
    backgroundColor: '#000'
}));

export const HeaderUtils = styled.div(({ theme }) => ({
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    flex: '0 0 auto',
    marginLeft: 'auto'
}));

export const BubblesBox = styled.div(({ theme }) => ({
    width: '100%',
    flex: '1 1 auto',
    position: 'relative',
    boxSizing: 'inherit',
}));

export const BubblesScrollable = styled.div(({ theme }) => ({
    overflowY: 'auto',
    scrollbarWidth: 'thin',
    height: 'auto',
    display: 'block',
    width: '100%',
    maxHeight: '100%',
    overflowX: 'hidden',
    position: 'absolute',
    top: '0px',
    left: '0px',
    bottom: '0px',
    right: '0px',
}));

export const BubblesInner = styled.div(({ theme }) => ({
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    margin: '0 auto',
    minHeight: '100%',
    justifyContent: 'flex-end',
    padding: '0 .8125rem',
    maxWidth: '728px'
}));

export const ChatInput = styled.div(({ theme }) => ({
    width: '100%',
    paddingbottom: '0.5rem',
    display: 'flex',
    maxwidth: '100%',
    paddingtop: '.25rem',
    flexdirection: 'column',
    flex: '0 0 auto',
    position: 'relative',
}));

export const InputContainer = styled.div(({ theme }) => ({
    display: 'flex',
    alignitems: 'flex-end',
    justifycontent: 'space-between',
    maxwidth: '728px',
    margin: '0 auto',
    width: '100%',
    padding: '0',
    flex: '0 0 auto',
    position: 'relative',
    paddingbottom: '10px',
}));


export const InputWrapper = styled.div(({ theme }) => ({
    display: 'flex',
    alignitems: 'center',
    flexdirection: 'column',
    width: '100%',
    maxwidth: '100%',
    justifycontent: 'center',
    backgroundcolor: '#fff',
    borderradius: '12px',
    borderbottomrightradius: '0',
    boxshadow: '0px 1px 8px 1px rgba(0, 0, 0, .18)',
    maxheight: '30rem',
    flex: '0 0 auto',
    position: 'relative',
    zindex: '3',
}));

export const NewMessageBox = styled.div(({ theme }) => ({
    alignitems: 'flex-end',
    minheight: '1rem',
    opacity: 1,
    display: 'flex',
    justifycontent: 'space-between',
    width: '100%',
    position: 'relative',
    backgroundcolor: 'inherit',
    borderradius: '.75rem',
}));

export const FinalInputContainer = styled.div(({ theme }) => ({
    width: '1%',
    maxheight: 'inherit',
    flex: '1 1 auto',
    position: 'relative',
    overflow: 'hidden',
    alignself: 'center',
    minheight: '2rem',
    display: 'flex',
    alignitems: 'center',
}));

export const Input = styled.input(({ theme }) => ({
    width: '60%',
    margin: '0 auto'
}));






