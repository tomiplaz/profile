'use strict';

const containerFirstElem = document.getElementsByClassName('container--first').item(0);

// Redefine vh unit for mobile on first container due to address bar
(function() {
    // via http://detectmobilebrowsers.com/
    const isMobile = (function(a){return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4));})(navigator.userAgent||navigator.vendor||window.opera);

    if (isMobile) {
        vhRedefine();

        window.addEventListener('resize', () => {
            vhRedefine();
        });
    }

    function vhRedefine() {
        const vh = window.innerHeight * 0.01;
        containerFirstElem.style.setProperty('--vh', `${vh}px`);
    }
})();

// Show/hide scroll indicator
(function() {
    const indicatorElem = document.getElementById('indicator');

    window.addEventListener('scroll', () => {
        const containerFirstElemRect = containerFirstElem.getBoundingClientRect();
        indicatorElem.className = containerFirstElemRect.top < -20 ? 'hide' : 'show';
    });
})();

// CLI functionality
(function() {
    const cursorElem = document.getElementById('cursor');
    const inputElem = document.getElementById('input');

    const HIDDEN = 'hidden';
    const KEYDOWN = 'keydown';
    const KEYUP = 'keyup';

    const CONTROL_KEY = 'Control';
    const BACKSPACE_KEY = 'Backspace';
    const ENTER_KEY = 'Enter';
    const C_KEY = 'c';
    const SPACE_KEY = ' ';
    const ARROW_UP = 'ArrowUp';
    const ARROW_DOWN = 'ArrowDown';

    const VALID_KEYS = [
        'abcdefghijklmnopqrstuvwxyz',
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        '1234567890',
        '!"#$%&/()=?*+-_.:,; '
    ].join('');

    const HELP = 'help';
    const CLEAR = 'clear';
    const EXIT = 'exit';
    const TOP = 'top';
    const GITHUB = 'github';
    const TWITTER = 'twitter';
    const LINKEDIN = 'linkedin';
    const STACKOVERFLOW = 'stackoverflow';
    const CV = 'cv';
    const NGBLOG = 'ngblog';
    const BLOG_API = 'blog-api';
    const MY_COINS = 'my-coins';
    const YAMB = 'yamb';
    const YAMB_V2 = 'yamb-v2';
    const YAMB_V1 = 'yamb-v1';
    const LOVE_TIMER = 'love-timer';

    const OPEN = 'open';
    const PROFILE = 'profile';
    const REPOSITORY = 'repository';
    const APPLICATION = 'application';
    
    const COMMAND_URLS = {
        [GITHUB]: 'https://github.com/tomiplaz',
        [TWITTER]: 'https://twitter.com/tomiplaz1',
        [LINKEDIN]: 'https://www.linkedin.com/in/tomislavplazonic',
        [STACKOVERFLOW]: 'https://stackoverflow.com/users/10478028/tomiplaz?tab=profile',
        [CV]: 'https://tomiplaz.xyz/cv.pdf',
        [NGBLOG]: 'https://github.com/tomiplaz/ngblog',
        [BLOG_API]: 'https://github.com/tomiplaz/blog-api',
        [MY_COINS]: 'https://github.com/tomiplaz/my-coins',
        [YAMB]: 'https://yamb.tomiplaz.xyz',
        [YAMB_V2]: 'https://yamb.tomiplaz.xyz',
        [YAMB_V1]: 'https://ugodnomjesto.000webhostapp.com/yamb/',
        [LOVE_TIMER]: 'https://tomiplaz.xyz/love-timer'
    };

    const COMMAND_NOT_FOUND_MESSAGE = `Invalid command!\nRun '${HELP}' to get a list of valid commands.`;
    const HELP_MESSAGE = 'Valid CLI commands for tomiplaz.xyz:\n\n' + [
        `${HELP}: show this list of CLI commands`,
        `${CLEAR}: clear input (same as CTRL+C)`,
        `${EXIT}: exit profile`,
        `${TOP}: go to top of the page`,
        `${GITHUB}: ${OPEN} GitHub ${PROFILE}`,
        `${TWITTER}: ${OPEN} Twitter ${PROFILE}`,
        `${LINKEDIN}: ${OPEN} LinkedIn ${PROFILE}`,
        `${STACKOVERFLOW}: ${OPEN} StackOverflow ${PROFILE}`,
        `${CV}: ${OPEN} curriculum vitae`,
        `${NGBLOG}: ${OPEN} ngblog ${REPOSITORY}`,
        `${BLOG_API}: ${OPEN} blog-api ${REPOSITORY}`,
        `${MY_COINS}: ${OPEN} my-coins ${REPOSITORY}`,
        `${YAMB}: alias for ${YAMB_V2}`,
        `${YAMB_V2}: ${OPEN} Yamb (v2) ${APPLICATION}`,
        `${YAMB_V1}: ${OPEN} Yamb (v1) ${APPLICATION}`,
        `${LOVE_TIMER}: ${OPEN} Love Timer demonstration`,
    ].join('\n');

    var isCtrlDown = false;
    var commandHistory = [];
    var commandWalkIndex = -1;
    
    setInterval(toggleCursor, 600);

    window.addEventListener(KEYDOWN, onKeyDown);
    window.addEventListener(KEYUP, onKeyUp);

    function toggleCursor() {
        if (cursorElem.hasAttribute(HIDDEN)) {
            cursorElem.removeAttribute(HIDDEN);
        } else {
            cursorElem.setAttribute(HIDDEN, true);
        }
    }

    function onKeyDown(event) {
        switch (event.key) {
            case CONTROL_KEY:
                isCtrlDown = true;
                break;
            case BACKSPACE_KEY:
                inputElem.textContent = inputElem.textContent.slice(0, -1);
                break;
            case ENTER_KEY:
                resetCommandWalkIndex();
                handleEnter(inputElem.textContent);
                break;
            case ARROW_UP:
            case ARROW_DOWN:
                let step = (event.key === ARROW_UP ? 1 : -1);
                if (commandHistory[commandWalkIndex + step]) {
                    commandWalkIndex += step;
                    setInput(commandHistory[commandWalkIndex]);
                } else if (commandWalkIndex + step === -1) {
                    resetCommandWalkIndex();
                    clearInput();
                }
                break;
            default:
                if (isCtrlDown && event.key === C_KEY) {
                    resetCommandWalkIndex();
                    clearInput();
                } else if (
                    VALID_KEYS.indexOf(event.key) !== -1 &&
                    inputElem.textContent.length < 15 &&
                    !(inputElem.textContent.substr(-1) === SPACE_KEY && event.key === SPACE_KEY)
                ) {
                    setInput(inputElem.textContent + event.key);
                }
        }

        function handleEnter(input) {
            if (input !== '') {
                commandHistory.unshift(input);
            }

            if (COMMAND_URLS[input]) {
                window.open(COMMAND_URLS[input]);
                clearInput();
            } else switch (input) {
                case HELP:
                    displayMessage(HELP_MESSAGE);
                    break;
                case CLEAR:
                    clearInput();
                    break;
                case EXIT:
                    window.open('about:blank', '_self');
                    break;
                case TOP:
                    window.scrollTo(0, 0);
                    clearInput();
                    break;
                case '':
                    break;
                default:
                    displayMessage(COMMAND_NOT_FOUND_MESSAGE);
            }
        }

        function resetCommandWalkIndex() {
            commandWalkIndex = -1;
        }

        function setInput(text) {
            inputElem.textContent = text;
        }

        function clearInput() {
            setInput('');
        }

        function displayMessage(message) {
            clearInput();
            alert(message);
        }
    }

    function onKeyUp(event) {
        if (event.key === CONTROL_KEY) {
            isCtrlDown = false;
        }
    }
})();
