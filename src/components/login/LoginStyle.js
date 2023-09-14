import styled, { keyframes } from 'styled-components';

const primary = '#00FCD1';
const secondary = '#04DFBD';
const lighter = '#9596A2';
const light = '#3D4256';
const dark = '#1E2137';
const bg1 = '#333342';
const bg2 = '#4D4E63';

// Define your keyframes
const skRotateplaneKeyframes = keyframes`
  0% { transform: perspective(120px) }
  50% { transform: perspective(120px) rotateY(180deg) }
  100% { transform: perspective(120px) rotateY(180deg) rotateX(180deg) }
`;

export const LoginStyle = styled.div`
/* body styles should be applied outside of this component */

.login {
   /* ... your other css code here ...*/

   &:before {
      content:"";
      position:absolute;
      background:${props => props.active ? `linear-gradient(90deg, ${secondary}, ${primary})` : "transparent"};
      bottom:${props => props.active ? "0" : "45px"};
      right:${props => props.active ? "0" : "40px"}; 
      width:${props => props.loading ? "55px" : (props.active ? "100%" : "")};
      height:${props => props.loading ? "55px" : (props.active ? "100%" : "")};
      z-index:5;
      transition:all .6s ease-in-out, background 0s ease;
   }

   .form {
       /* ... your other css code here ...*/

       .button{
           /* ... your other css code here ...*/
           
           .arrow-wrapper{
               background:${props => props.loading? "#fff": `linear-gradient(90deg, ${secondary}, ${primary})`};
               width:${props => props.loading? "55px": ""};
               animation-name :${skRotateplaneKeyframes};
               animation-duration :${props=> props.loading? '1.2s': '' };
               animation-iteration-count :${props=> (props.loading || props.active)? 'infinite': '' };
               animation-timing-function :'ease-in-out' ;
               animation-delay :'0.5s' ;
               
              .arrow{
                  background:#fff;
                  transform:${prop=> prop.loading?"translateX(-15px)": ""};
                  opacity:${prop=> prop.loading?"0": ""};   
              }
           }

           .button-text{
                color:$lighter;   
           }
        } 
       
        &.finished{
            svg{
                stroke-dashoffset:{prop=> prop.active?"0":""};  
            } 
        }  
    }
}
`;

export default LoginStyle;