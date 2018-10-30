'use strict';

// indicator
(function() {
    const indicatorElem = document.getElementById('indicator');
    const topElem = document.getElementsByClassName('container--first').item(0);

    window.addEventListener('scroll', () => {
        const topElemRect = topElem.getBoundingClientRect();

        indicatorElem.className = topElemRect.top < -30 ? 'hide' : 'show';
    });
})();

// cli
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
        [CV]: 'https://tomiplaz.xyz/Tomislav_Plazonic_CV.pdf',
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
