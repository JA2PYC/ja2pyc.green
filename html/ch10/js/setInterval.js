addEventListener('DOMContentLoaded', () => {
    function initialize() {
        eventHandler()
    }

    function eventHandler() {
        addEventListener('click', (event) => {
            let target = event.target;

            if (target.classList.contains('button_currentTime')) {
                callCurrentTime(target, event);
            } else if (target.classList.contains('button_currentTimeStop')) {
                callCurrentTimeStop(target, event);
            } else if (target.classList.contains('button_startSignal')) {
                callTrafficLightStart(target, event);
            } else if (target.classList.contains('button_stopSignal')) {
                callTrafficLightStop(target, event);
            } else if (target.classList.contains('button_followCursor')) {
                callFollowCursor(target, event);
            } else if (target.classList.contains('button_unfollowCursor')) {
                callUnfollowCursor(target, event);
            }

        });
    }

    let currentTimeIntervalId;
    function callCurrentTime(target, event) {
        let targetParent = target.parentNode;
        let result = targetParent.querySelector('.result');

        let currentTime = new Date().toLocaleTimeString();
        result.value = currentTime

        currentTimeIntervalId = setInterval(() => {
            let currentTime = new Date().toLocaleTimeString();
            result.value = currentTime
        }, 1000)
    }

    function callCurrentTimeStop(target, event) {
        let targetParent = target.parentNode;
        let result = targetParent.querySelector('.result');

        result.value = '';

        if (currentTimeIntervalId) {
            clearInterval(currentTimeIntervalId);
        }
    }

    let trafficLightIntervalId;
    let trafficLightSequence = 0;
    function callTrafficLightStart(target, event) {
        let targetParent = target.parentNode;
        let result = targetParent.querySelector('.result');

        console.log(trafficLightIntervalId);

        if (!trafficLightIntervalId) {
            trafficLightIntervalId = setInterval(() => {
                Array.from(result.children).forEach((array, index) => {
                    if (trafficLightSequence === index) {
                        array.classList.remove('light_hidden');
                    } else {
                        if (!array.classList.contains('light_hidden')) array.classList.add('light_hidden');
                    }
                });
                trafficLightSequence++
                if (trafficLightSequence > result.children.length - 1) trafficLightSequence = 0;
            }, 1000);
        }
    }

    function callTrafficLightStop(target, evnet) {
        let targetParent = target.parentNode;
        let result = targetParent.querySelector('.result');

        clearInterval(trafficLightIntervalId);
        trafficLightIntervalId = '';
    }

    let isFollowing = false;
    let mouseMoveHandler = null;
    let followTarget;
    function callFollowCursor(target, event) {
        let targetParent = target.parentNode;
        let result = targetParent.querySelector('.result');

        if (isFollowing) return;

        addEventListener('mousedown', callFollowTargetSetter);
    }

    function callFollowTargetSetter(event) {
        followTarget = event.target;

        if (followTarget.classList.contains('follow_target')) {
            isFollowing = true

            removeEventListener('mousedown', callFollowTargetSetter);
            mouseMoveHandler = (followTargetEvent) => callFollowingCursor(followTargetEvent, followTarget);
            addEventListener('mousemove', mouseMoveHandler);
        } else {
            removeEventListener('mousedown', callFollowTargetSetter);
        }
    }

    function callFollowingCursor(event, followTarget) {
        if (!followTarget) return; // Add a safeguard for null followTarget

        followTarget.style.position = 'absolute';
        followTarget.style.width = '100px';
        followTarget.style.height = 'auto';
        followTarget.style.left = (event.pageX + 10) + 'px';
        followTarget.style.top = (event.pageY + 10) + 'px';
    }

    function callUnfollowCursor(target, event) {
        let targetParent = target.parentNode;
        let result = targetParent.querySelector('.result');

        if (mouseMoveHandler) {
            removeEventListener('mousemove', mouseMoveHandler);
            mouseMoveHandler = null;

            if (followTarget.classList.contains('follow_target')) {
                followTarget.style.position = '';
                followTarget.style.width = '';
                followTarget.style.height = '';
                followTarget.style.left = '';
                followTarget.style.top = '';
            }

            followTarget = null;
            isFollowing = false;
        }
    }

    initialize();
});