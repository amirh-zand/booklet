(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var n = function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (n) {
                return function () {
                    var s, t;
                    var u = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        s = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (w) {
                            var x = w['get']('player');
                            return x && x['get']('viewerArea') == u;
                        })['map'](function (w) {
                            return w['get']('media')['get']('playList');
                        });
                    else {
                        s = this['_getPlayListsWithViewer'](u);
                        t = j['bind'](this, u);
                    }
                    if (!c) {
                        for (var v = 0x0; v < s['length']; ++v) {
                            s[v]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, s, n, t);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var o = k['split']('.');
                var p = o[0x1];
                if (p) {
                    var q = o['slice'](0x2)['join']('.');
                    return d(q, { 'viewerName': p });
                }
            } else if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var r = undefined;
                var n = function () {
                    switch (k['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                        if (s) {
                            r = s[0x1];
                            switch ('quiz.' + s[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (n) {
                    return function () {
                        var s = this['get']('data')['quiz'];
                        if (s) {
                            if (!c) {
                                if (r != undefined)
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, w[y]['id'], n), this);
                                        }
                                    } else {
                                        s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, r, n), this);
                                    }
                                else
                                    s['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, n), this);
                                c = !![];
                            }
                            try {
                                var B = 0x0;
                                if (r != undefined) {
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            B += s['getObjective'](w[y]['id'], n);
                                        }
                                    } else {
                                        B = s['getObjective'](r, n);
                                    }
                                } else {
                                    B = s['get'](n);
                                    if (n == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        B += 0x1;
                                }
                                return B;
                            } catch (C) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l];
            var n = function () {
                m['unbind']('begin', n, this);
                e['call'](this);
            };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            if (k in l) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            if (k == m && l in n) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n];
            var p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.');
                var r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"children":["this.MainViewer"],"gap":10,"minHeight":0,"minWidth":0,"id":"rootPlayer","backgroundColor":["#FFFFFF"],"data":{"textToSpeechConfig":{"pitch":1,"speechOnInfoWindow":false,"volume":1,"speechOnQuizQuestion":false,"rate":1,"stopBackgroundAudio":false,"speechOnTooltip":false},"defaultLocale":"en","displayTooltipInTouchScreens":true,"name":"Player626","locales":{"en":"locale/en.txt"},"history":{}},"backgroundColorRatios":[0],"watermark":false,"defaultMenu":["fullscreen","mute","rotation"],"hash": "0826db5084f54035a355f2bd2a0302525cb55b87c36811737169a8ac4ac0611d", "definitions": [{"viewerArea":"this.MainViewer","arrowKeysAction":"translate","mouseControlMode":"drag_rotation","displayPlaybackBar":true,"touchControlMode":"drag_rotation","aaEnabled":true,"id":"MainViewerPanoramaPlayer","class":"PanoramaPlayer"},{"items":[{"camera":"this.panorama_53C78224_4141_9403_419A_621466D27B36_camera","media":"this.panorama_53C78224_4141_9403_419A_621466D27B36","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem"}],"id":"mainPlayList","class":"PlayList"},{"enterPointingToHorizon":true,"id":"panorama_53C78224_4141_9403_419A_621466D27B36_camera","automaticRotationSpeed":77,"automaticZoomSpeed":18,"initialSequence":"this.sequence_4DF0EF6E_4146_9D06_41CC_E944458A65FB","initialPosition":{"pitch":8.59,"yaw":-41.1,"class":"PanoramaCameraPosition","hfov":87},"displayOriginPosition":{"pitch":-90,"stereographicFactor":1,"yaw":-41.1,"class":"RotationalCameraDisplayPosition","hfov":165},"manualZoomSpeed":2,"displayMovements":[{"duration":1000,"class":"TargetRotationalCameraDisplayMovement"},{"targetPitch":8.59,"targetStereographicFactor":0,"targetHfov":87,"easing":"cubic_in_out","duration":3000,"class":"TargetRotationalCameraDisplayMovement"}],"class":"PanoramaCamera"},{"thumbnailUrl":"media/panorama_53C78224_4141_9403_419A_621466D27B36_t.jpg","label":trans('panorama_53C78224_4141_9403_419A_621466D27B36.label'),"audios":["this.audio_5038AC16_415E_6C0F_41C6_2E45F64967FD"],"hfovMax":135,"id":"panorama_53C78224_4141_9403_419A_621466D27B36","class":"Panorama","vfov":180,"data":{"label":"AGC_20250605_150605266.PHOTOSPHERE copy"},"hfovMin":"135%","frames":[{"thumbnailUrl":"media/panorama_53C78224_4141_9403_419A_621466D27B36_t.jpg","cube":{"class":"ImageResource","levels":[{"width":18432,"url":"media/panorama_53C78224_4141_9403_419A_621466D27B36_0/{face}/0/{row}_{column}.jpg","rowCount":6,"class":"TiledImageResourceLevel","height":3072,"colCount":36,"tags":"ondemand"},{"width":9216,"url":"media/panorama_53C78224_4141_9403_419A_621466D27B36_0/{face}/1/{row}_{column}.jpg","rowCount":3,"class":"TiledImageResourceLevel","height":1536,"colCount":18,"tags":"ondemand"},{"width":6144,"url":"media/panorama_53C78224_4141_9403_419A_621466D27B36_0/{face}/2/{row}_{column}.jpg","rowCount":2,"class":"TiledImageResourceLevel","height":1024,"colCount":12,"tags":"ondemand"},{"width":3072,"url":"media/panorama_53C78224_4141_9403_419A_621466D27B36_0/{face}/3/{row}_{column}.jpg","rowCount":1,"class":"TiledImageResourceLevel","height":512,"colCount":6,"tags":["ondemand","preload"]}]},"class":"CubicPanoramaFrame"}],"hfov":360},{"height":"100%","firstTransitionDuration":0,"toolTipFontFamily":"Arial","toolTipPaddingTop":4,"minHeight":50,"playbackBarHeadBorderColor":"#000000","subtitlesGap":0,"minWidth":100,"playbackBarHeadBackgroundColor":["#111111","#666666"],"vrPointerSelectionTime":2000,"toolTipPaddingBottom":4,"toolTipPaddingRight":6,"playbackBarBorderSize":0,"progressBackgroundColor":["#000000"],"playbackBarBottom":5,"subtitlesTextShadowColor":"#000000","vrThumbstickRotationStep":20,"subtitlesBottom":50,"subtitlesBackgroundColor":"#000000","toolTipPaddingLeft":6,"surfaceReticleSelectionColor":"#FFFFFF","progressBottom":10,"playbackBarBackgroundColor":["#FFFFFF"],"progressHeight":2,"vrPointerColor":"#FFFFFF","playbackBarHeight":10,"toolTipBackgroundColor":"#F6F6F6","progressBorderSize":0,"data":{"name":"Main Viewer"},"subtitlesFontSize":"3vmin","subtitlesBackgroundOpacity":0.2,"progressBarBorderRadius":2,"playbackBarHeadWidth":6,"progressBarBorderSize":0,"playbackBarProgressBorderSize":0,"propagateClick":false,"progressBackgroundColorRatios":[0],"toolTipBorderColor":"#767676","playbackBarRight":0,"progressBorderRadius":2,"playbackBarBackgroundColorDirection":"vertical","toolTipShadowColor":"#333138","progressRight":"33%","progressOpacity":0.7,"playbackBarProgressBorderRadius":0,"toolTipFontColor":"#606060","playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesTextShadowOpacity":1,"progressLeft":"33%","toolTipTextShadowColor":"#000000","id":"MainViewer","subtitlesTextShadowVerticalLength":1,"progressBarBorderColor":"#000000","progressBarBackgroundColorDirection":"horizontal","toolTipFontSize":"1.11vmin","progressBarBackgroundColorRatios":[0],"playbackBarLeft":0,"playbackBarBackgroundOpacity":1,"subtitlesTop":0,"playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadShadowBlurRadius":3,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadBorderSize":0,"playbackBarHeadShadowColor":"#000000","playbackBarHeadShadow":true,"playbackBarHeadShadowOpacity":0.7,"subtitlesTextShadowHorizontalLength":1,"playbackBarBorderRadius":0,"progressBorderColor":"#000000","playbackBarProgressBorderColor":"#000000","class":"ViewerArea","subtitlesBorderColor":"#FFFFFF","subtitlesFontFamily":"Arial","vrPointerSelectionColor":"#FF6600","width":"100%","surfaceReticleColor":"#FFFFFF","progressBarBackgroundColor":["#3399FF"],"subtitlesFontColor":"#FFFFFF","playbackBarHeadBorderRadius":0},{"data":{"label":"\u067e\u0644\u06cc \u0644\u06cc\u0633\u062a \u0645\u0648\u0633\u06cc\u0642\u06cc \u0647\u0627\u06cc \u0622\u0631\u0627\u0645 \u0628\u0647 \u0647\u0645\u0631\u0627\u0647 \u0635\u062f\u0627\u06cc \u0637\u0628\u06cc\u0639\u062a (Wild Ambience) - \u0633\u0627\u0646\u06af \u0633\u0631\u0627"},"audio":"this.audiores_50C22BE0_415F_9402_41C9_A9CF5DC20FB5","autoplay":true,"id":"audio_5038AC16_415E_6C0F_41C6_2E45F64967FD","class":"PanoramaAudio"},{"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"yawSpeed":6.37,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawDelta":323,"yawSpeed":6.37,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"yawSpeed":6.37,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"id":"sequence_4DF0EF6E_4146_9D06_41CC_E944458A65FB"},{"mp3Url":trans('audiores_50C22BE0_415F_9402_41C9_A9CF5DC20FB5.mp3Url'),"id":"audiores_50C22BE0_415F_9402_41C9_A9CF5DC20FB5","class":"AudioResource"}],"start":"this.init()","scrollBarMargin":2,"scripts":{"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"quizStart":TDV.Tour.Script.quizStart,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"clone":TDV.Tour.Script.clone,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"openLink":TDV.Tour.Script.openLink,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"toggleVR":TDV.Tour.Script.toggleVR,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"quizFinish":TDV.Tour.Script.quizFinish,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"startMeasurement":TDV.Tour.Script.startMeasurement,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getPixels":TDV.Tour.Script.getPixels,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"downloadFile":TDV.Tour.Script.downloadFile,"textToSpeech":TDV.Tour.Script.textToSpeech,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getMainViewer":TDV.Tour.Script.getMainViewer,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"shareSocial":TDV.Tour.Script.shareSocial,"initQuiz":TDV.Tour.Script.initQuiz,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"registerKey":TDV.Tour.Script.registerKey,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"historyGoForward":TDV.Tour.Script.historyGoForward,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getMediaByName":TDV.Tour.Script.getMediaByName,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"initAnalytics":TDV.Tour.Script.initAnalytics,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"unregisterKey":TDV.Tour.Script.unregisterKey,"existsKey":TDV.Tour.Script.existsKey,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"init":TDV.Tour.Script.init,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setMapLocation":TDV.Tour.Script.setMapLocation,"executeJS":TDV.Tour.Script.executeJS,"setValue":TDV.Tour.Script.setValue,"historyGoBack":TDV.Tour.Script.historyGoBack,"resumePlayers":TDV.Tour.Script.resumePlayers,"getComponentByName":TDV.Tour.Script.getComponentByName,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"isPanorama":TDV.Tour.Script.isPanorama,"mixObject":TDV.Tour.Script.mixObject,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"cloneBindings":TDV.Tour.Script.cloneBindings,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"showWindow":TDV.Tour.Script.showWindow,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getKey":TDV.Tour.Script.getKey,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"showPopupImage":TDV.Tour.Script.showPopupImage,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getOverlays":TDV.Tour.Script.getOverlays,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"enableVR":TDV.Tour.Script.enableVR,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"playAudioList":TDV.Tour.Script.playAudioList,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"translate":TDV.Tour.Script.translate,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"createTween":TDV.Tour.Script.createTween,"disableVR":TDV.Tour.Script.disableVR,"quizShowScore":TDV.Tour.Script.quizShowScore,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setLocale":TDV.Tour.Script.setLocale},"class":"Player","width":"100%","height":"100%","scrollBarColor":"#000000","layout":"absolute","propagateClick":false};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var a = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return a;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2024.0.11.js.map
})();
//Generated with v2024.0.11, Thu Jun 5 2025