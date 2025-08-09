(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    b = b['toLowerCase']();
    return d(b);
    function d(k, l) {
        switch (k) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var n = function () {
                switch (k) {
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
                    if (k['startsWith']('photo'))
                        s = this['getByClassName']('PhotoPlayList');
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
            if (k['startsWith']('viewer.')) {
                var o = k['split']('.');
                var p = o[0x1];
                if (p) {
                    var q = o['slice'](0x2)['join']('.');
                    return d(q, { 'viewerName': p });
                }
            } else if (k['startsWith']('quiz.') && 'Quiz' in TDV) {
                var r = undefined;
                var n = function () {
                    switch (k) {
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
        } else
            e['call'](this);
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
var script = {"defaultMenu":["fullscreen","mute","rotation"],"lockedOrientation":"portrait","start":"this.playAudioList([this.audio_9C2E31AF_8E72_2D50_41B3_F54E2FBC2DDA], true); this.get('data').surfaceSelectionHotspotMode = 'circleEnabled'; this.init()","data":{"locales":{"en":"locale/en.txt"},"history":{},"textToSpeechConfig":{"stopBackgroundAudio":false,"volume":1,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"rate":1,"speechOnTooltip":false,"pitch":1},"name":"Player16255","defaultLocale":"en"},"children":["this.MainViewer_mobile","this.Image_8243AB23_8D93_0A9C_41C8_B4749D3C8CD6_mobile","this.Image_9D0B35F0_8D97_397B_41CD_A09FBB373CE9_mobile","this.Image_9D1E7D60_8D97_0E9B_41D3_4A1CC427EE99_mobile","this.Image_9DD65D76_8D91_0967_41CD_98E05CDA240A_mobile","this.IconButton_9E0E7D57_8E6F_D5F0_41B0_0592C7D912AC"],"minHeight":0,"minWidth":0,"class":"Player","mute":true,"backgroundColor":["#FFFFFF"],"id":"rootPlayer","gap":10,"scrollBarMargin":2,"hash": "2aa9bb21245c4b0b70135b960bd98e8c83624cfadd36eaef988f65fda3c2587c", "definitions": [{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"initialSequence":"this.sequence_83CC206A_8D93_376F_41E0_F1FCB70D275F","enterPointingToHorizon":true,"id":"panorama_837C5741_8D92_FA9D_41C9_342C42DFDF9D_camera","class":"PanoramaCamera"},{"autoplay":true,"class":"MediaAudio","id":"audio_9C2E31AF_8E72_2D50_41B3_F54E2FBC2DDA","data":{"label":"Faramarz Aslani - To"},"audio":"this.audiores_9F87951F_8E76_3570_41C0_3C94FA5B754B"},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"initialSequence":"this.sequence_8332006A_8D93_376F_41C8_A91B2A691085","enterPointingToHorizon":true,"id":"panorama_83D8DFFD_8D93_0965_41CB_B154F4E01621_camera","class":"PanoramaCamera"},{"id":"MainViewer_mobilePanoramaPlayer","mode":"quality","class":"PanoramaPlayer","viewerArea":"this.MainViewer_mobile","arrowKeysAction":"translate","mouseControlMode":"drag_rotation","aaEnabled":true,"adjacentPanoramaPositionsEnabled":true,"touchControlMode":"drag_rotation","surfaceSelectionEnabled":true},{"changing":"var event = arguments[0]; this.changePlayListWithSameSpot(event.source, event.data.nextSelectedIndex)","class":"PlayList","id":"mainPlayList","items":["this.PanoramaPlayListItem_9FBF45EC_8E72_74D0_41D6_49A0AFB0AF3E","this.PanoramaPlayListItem_9FBF35EC_8E72_74D0_41DA_E548A1DD6CCA","this.PanoramaPlayListItem_9FBEC5EB_8E72_74D0_41E0_3D2335B6A7AD",{"class":"VideoPlayListItem","player":"this.MainViewer_mobileVideoPlayer","end":"this.trigger('tourEnded')","start":"this.MainViewer_mobileVideoPlayer.set('displayPlaybackBar', true); this.MainViewer_mobileVideoPlayer.set('displayPlayOverlay', true); this.MainViewer_mobileVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.mainPlayList, 3, '#000000')","media":"this.video_8273E621_8D93_7A9C_41C3_C119F0974B3F","begin":"this.fixTogglePlayPauseButton(this.MainViewer_mobileVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 0)"}]},{"id":"effect_994B012A_8D97_76EC_41E0_AF45071F8190","duration":500,"class":"FadeOutEffect"},{"right":"11%","data":{"name":"Image18044"},"minHeight":1,"id":"Image_9DD65D76_8D91_0967_41CD_98E05CDA240A_mobile","minWidth":1,"url":trans('Image_9DD65D76_8D91_0967_41CD_98E05CDA240A_mobile.url'),"class":"Image","scaleMode":"fit_inside","bottom":"18.69%","horizontalAlign":"center","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_9FBF45EC_8E72_74D0_41D6_49A0AFB0AF3E, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 0); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_99E740D2_8D91_17BF_41CC_78E8B87AFC77, 'hideEffect', false)}.bind(this); invisibleFunc(this.Image_9D1E7D60_8D97_0E9B_41D3_4A1CC427EE99_mobile); invisibleFunc(this.Image_9D0B35F0_8D97_397B_41CD_A09FBB373CE9_mobile); invisibleFunc(this.Image_8243AB23_8D93_0A9C_41C8_B4749D3C8CD6_mobile); invisibleFunc(this.Image_9DD65D76_8D91_0967_41CD_98E05CDA240A_mobile)","width":"75%","propagateClick":false,"height":"24%","verticalAlign":"middle","visible":false,"backgroundOpacity":0,"cursor":"hand"},{"label":trans('panorama_83D8383A_8D93_16EC_41CD_75E66254BF33.label'),"hfov":360,"data":{"label":"dji_fly_\u06f2\u06f0\u06f2\u06f2\u06f0\u06f9\u06f1\u06f0_\u06f1\u06f9\u06f3\u06f1\u06f4\u06f4_874_1662822857216_pano_optimized"},"thumbnailUrl":"media/panorama_83D8383A_8D93_16EC_41CD_75E66254BF33_t.jpg","frames":[{"thumbnailUrl":"media/panorama_83D8383A_8D93_16EC_41CD_75E66254BF33_t.jpg","cube":{"levels":[{"tags":"ondemand","height":1536,"colCount":18,"class":"TiledImageResourceLevel","rowCount":3,"url":"media/panorama_83D8383A_8D93_16EC_41CD_75E66254BF33_0/{face}/0/{row}_{column}.jpg","width":9216},{"tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_83D8383A_8D93_16EC_41CD_75E66254BF33_0/{face}/1/{row}_{column}.jpg","width":6144},{"tags":["ondemand","preload"],"height":512,"colCount":6,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_83D8383A_8D93_16EC_41CD_75E66254BF33_0/{face}/2/{row}_{column}.jpg","width":3072},{"tags":"mobilevr","height":1536,"colCount":6,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_83D8383A_8D93_16EC_41CD_75E66254BF33_0/{face}/vr/0.jpg","width":9216}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"class":"Panorama","hfovMin":"150%","overlays":["this.overlay_9E500C31_8D91_0EFD_41E0_BFFE23ADAE8A"],"vfov":180,"id":"panorama_83D8383A_8D93_16EC_41CD_75E66254BF33","hfovMax":130},{"label":trans('video_9C4BD882_8DF7_179C_41D6_A2D9089924BE.label'),"video":"this.videores_9D74196C_8DF7_096B_41A8_183E001CC581","thumbnailUrl":"media/video_9C4BD882_8DF7_179C_41D6_A2D9089924BE_t.jpg","data":{"label":"\u0645\u0646\u0637\u0642\u06473 \u067e\u0627\u062f\u0646\u0627"},"width":1280,"class":"Video","height":720,"id":"video_9C4BD882_8DF7_179C_41D6_A2D9089924BE"},{"right":"11%","data":{"name":"Image17995"},"minHeight":1,"minWidth":1,"class":"Image","url":trans('Image_9D1E7D60_8D97_0E9B_41D3_4A1CC427EE99_mobile.url'),"top":"31%","scaleMode":"fit_inside","horizontalAlign":"center","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_9FBF35EC_8E72_74D0_41DA_E548A1DD6CCA, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 1); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_9951A362_8D91_1A9F_41B9_90F5FDD73A0E, 'hideEffect', false)}.bind(this); invisibleFunc(this.Image_9D1E7D60_8D97_0E9B_41D3_4A1CC427EE99_mobile); invisibleFunc(this.Image_9D0B35F0_8D97_397B_41CD_A09FBB373CE9_mobile); invisibleFunc(this.Image_8243AB23_8D93_0A9C_41C8_B4749D3C8CD6_mobile); invisibleFunc(this.Image_9DD65D76_8D91_0967_41CD_98E05CDA240A_mobile)","width":"75%","propagateClick":false,"height":"24%","verticalAlign":"middle","visible":false,"backgroundOpacity":0,"id":"Image_9D1E7D60_8D97_0E9B_41D3_4A1CC427EE99_mobile","cursor":"hand"},{"label":trans('panorama_83D8DFFD_8D93_0965_41CB_B154F4E01621.label'),"hfov":360,"data":{"label":"d (12)"},"thumbnailUrl":"media/panorama_83D8DFFD_8D93_0965_41CB_B154F4E01621_t.jpg","frames":[{"thumbnailUrl":"media/panorama_83D8DFFD_8D93_0965_41CB_B154F4E01621_t.jpg","cube":{"levels":[{"tags":"ondemand","height":1536,"colCount":18,"class":"TiledImageResourceLevel","rowCount":3,"url":"media/panorama_83D8DFFD_8D93_0965_41CB_B154F4E01621_0/{face}/0/{row}_{column}.jpg","width":9216},{"tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_83D8DFFD_8D93_0965_41CB_B154F4E01621_0/{face}/1/{row}_{column}.jpg","width":6144},{"tags":["ondemand","preload"],"height":512,"colCount":6,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_83D8DFFD_8D93_0965_41CB_B154F4E01621_0/{face}/2/{row}_{column}.jpg","width":3072},{"tags":"mobilevr","height":1536,"colCount":6,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_83D8DFFD_8D93_0965_41CB_B154F4E01621_0/{face}/vr/0.jpg","width":9216}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"class":"Panorama","hfovMin":"150%","overlays":["this.overlay_9E7E9FE1_8D91_099C_41D5_38E227B371C2"],"vfov":180,"id":"panorama_83D8DFFD_8D93_0965_41CB_B154F4E01621","hfovMax":130},{"id":"effect_9E0A0480_8D91_1F9C_41D8_33EEB08B5D14","duration":500,"class":"FadeInEffect"},{"id":"effect_98F3DADE_8EB3_0BA7_41D9_D7205149728A","duration":8000,"class":"FadeInEffect"},{"displayPlaybackBar":true,"id":"MainViewer_mobileVideoPlayer","class":"VideoPlayer","clickAction":"play_pause","displayPlayOverlay":true,"viewerArea":"this.MainViewer_mobile"},{"id":"effect_99E740D2_8D91_17BF_41CC_78E8B87AFC77","duration":500,"class":"FadeOutEffect"},{"right":"11%","data":{"name":"Image17943"},"minHeight":1,"minWidth":1,"class":"Image","url":trans('Image_9D0B35F0_8D97_397B_41CD_A09FBB373CE9_mobile.url'),"top":"3.83%","scaleMode":"fit_inside","horizontalAlign":"center","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_9FBEC5EB_8E72_74D0_41E0_3D2335B6A7AD, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 2); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_994B012A_8D97_76EC_41E0_AF45071F8190, 'hideEffect', false)}.bind(this); invisibleFunc(this.Image_9D1E7D60_8D97_0E9B_41D3_4A1CC427EE99_mobile); invisibleFunc(this.Image_9D0B35F0_8D97_397B_41CD_A09FBB373CE9_mobile); invisibleFunc(this.Image_8243AB23_8D93_0A9C_41C8_B4749D3C8CD6_mobile); invisibleFunc(this.Image_9DD65D76_8D91_0967_41CD_98E05CDA240A_mobile); this.setPlayListSelectedIndex(this.mainPlayList, 3); this.MainViewer_mobileVideoPlayer.play()","width":"75%","propagateClick":false,"height":"24%","verticalAlign":"middle","visible":false,"backgroundOpacity":0,"id":"Image_9D0B35F0_8D97_397B_41CD_A09FBB373CE9_mobile","cursor":"hand"},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"initialSequence":"this.sequence_8332706B_8D93_376D_41C3_867E205604C2","enterPointingToHorizon":true,"id":"panorama_83D8383A_8D93_16EC_41CD_75E66254BF33_camera","class":"PanoramaCamera"},{"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesFontSize":"3vmin","subtitlesBackgroundOpacity":0.2,"firstTransitionDuration":0,"playbackBarHeadShadowColor":"#000000","displayTooltipInTouchScreens":false,"toolTipShadowColor":"#333138","data":{"name":"Main Viewer"},"toolTipPaddingLeft":3,"subtitlesBorderColor":"#FFFFFF","playbackBarHeadBorderSize":0,"toolTipTextShadowColor":"#000000","progressRight":"33%","progressBorderSize":0,"playbackBarHeight":10,"minWidth":50,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadShadow":true,"playbackBarHeadWidth":6,"progressOpacity":0.7,"minHeight":25,"subtitlesFontFamily":"Arial","playbackBarProgressBorderColor":"#000000","toolTipShadowBlurRadius":1,"vrPointerSelectionTime":2000,"progressLeft":"33%","progressBarBackgroundColor":["#3399FF"],"playbackBarProgressBorderSize":0,"progressBarBorderRadius":2,"playbackBarBackgroundColorDirection":"vertical","progressBarBorderSize":0,"subtitlesGap":0,"playbackBarBackgroundOpacity":1,"playbackBarRight":0,"playbackBarHeadBorderRadius":0,"vrPointerSelectionColor":"#FF6600","subtitlesBackgroundColor":"#000000","playbackBarProgressBorderRadius":0,"progressBackgroundColorRatios":[0],"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadBorderColor":"#000000","subtitlesTextShadowOpacity":1,"playbackBarBorderRadius":0,"playbackBarProgressBackgroundColor":["#3399FF"],"progressBackgroundColor":["#000000"],"toolTipFontColor":"#606060","height":"100%","subtitlesFontColor":"#FFFFFF","playbackBarBorderSize":0,"width":"100%","playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipFontFamily":"Arial","progressBarBorderColor":"#000000","progressBarBackgroundColorRatios":[0],"toolTipFontSize":"1.11vmin","subtitlesBottom":50,"playbackBarBottom":5,"progressBorderRadius":2,"toolTipBorderColor":"#767676","toolTipBackgroundColor":"#F6F6F6","progressHeight":2,"class":"ViewerArea","playbackBarHeadShadowBlurRadius":1.5,"progressBarBackgroundColorDirection":"horizontal","toolTipTextShadowBlurRadius":1,"playbackBarHeadShadowOpacity":0.7,"surfaceReticleColor":"#FFFFFF","toolTipPaddingRight":3,"subtitlesTextShadowVerticalLength":1,"vrPointerColor":"#FFFFFF","surfaceReticleSelectionColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0],"progressBottom":10,"playbackBarLeft":0,"toolTipBorderRadius":1,"playbackBarHeadHeight":15,"subtitlesTop":0,"propagateClick":false,"subtitlesTextShadowColor":"#000000","id":"MainViewer_mobile","playbackBarBackgroundColor":["#FFFFFF"],"progressBorderColor":"#000000"},{"label":trans('panorama_837C5741_8D92_FA9D_41C9_342C42DFDF9D.label'),"hfov":360,"data":{"label":"d (7)"},"thumbnailUrl":"media/panorama_837C5741_8D92_FA9D_41C9_342C42DFDF9D_t.jpg","frames":[{"thumbnailUrl":"media/panorama_837C5741_8D92_FA9D_41C9_342C42DFDF9D_t.jpg","cube":{"levels":[{"tags":"ondemand","height":1536,"colCount":18,"class":"TiledImageResourceLevel","rowCount":3,"url":"media/panorama_837C5741_8D92_FA9D_41C9_342C42DFDF9D_0/{face}/0/{row}_{column}.jpg","width":9216},{"tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_837C5741_8D92_FA9D_41C9_342C42DFDF9D_0/{face}/1/{row}_{column}.jpg","width":6144},{"tags":["ondemand","preload"],"height":512,"colCount":6,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_837C5741_8D92_FA9D_41C9_342C42DFDF9D_0/{face}/2/{row}_{column}.jpg","width":3072},{"tags":"mobilevr","height":1536,"colCount":6,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_837C5741_8D92_FA9D_41C9_342C42DFDF9D_0/{face}/vr/0.jpg","width":9216}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"class":"Panorama","hfovMin":"150%","overlays":["this.overlay_9E81D767_8D9F_1965_41E0_674B8E4A886E"],"vfov":180,"id":"panorama_837C5741_8D92_FA9D_41C9_342C42DFDF9D","hfovMax":130},{"id":"effect_9942C46E_8D91_1F64_41D6_1245D2AC4E0D","duration":500,"class":"FadeInEffect"},{"verticalAlign":"middle","right":"16.93%","data":{"name":"Button37509"},"pressedIconURL":"skin/IconButton_9E0E7D57_8E6F_D5F0_41B0_0592C7D912AC_pressed.png","minHeight":0,"id":"IconButton_9E0E7D57_8E6F_D5F0_41B0_0592C7D912AC","minWidth":0,"class":"IconButton","bottom":"7.17%","mode":"toggle","horizontalAlign":"center","iconURL":"skin/IconButton_9E0E7D57_8E6F_D5F0_41B0_0592C7D912AC.png","width":55.05,"height":39.1,"propagateClick":false,"transparencyActive":true,"backgroundOpacity":0},{"id":"effect_9951A362_8D91_1A9F_41B9_90F5FDD73A0E","duration":500,"class":"FadeOutEffect"},{"label":trans('video_8273E621_8D93_7A9C_41C3_C119F0974B3F.label'),"video":"this.videores_8267E8BF_8D93_37E5_41C1_D6A617E82967","thumbnailUrl":"media/video_8273E621_8D93_7A9C_41C3_C119F0974B3F_t.jpg","data":{"label":"55"},"width":1920,"class":"Video","height":1080,"scaleMode":"fit_outside","id":"video_8273E621_8D93_7A9C_41C3_C119F0974B3F"},{"id":"effect_9E16B835_8D91_36E5_41D9_3B8966F19732","duration":500,"class":"FadeInEffect"},{"id":"Image_8243AB23_8D93_0A9C_41C8_B4749D3C8CD6_mobile","data":{"name":"Image17075"},"minHeight":1,"minWidth":1,"url":trans('Image_8243AB23_8D93_0A9C_41C8_B4749D3C8CD6_mobile.url'),"class":"Image","scaleMode":"fit_outside","bottom":"0%","horizontalAlign":"center","show":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 1700, this.effect_98F3DADE_8EB3_0BA7_41D9_D7205149728A, 'showEffect', false)}.bind(this); visibleFunc(this.Image_9D0B35F0_8D97_397B_41CD_A09FBB373CE9_mobile); visibleFunc(this.Image_9DD65D76_8D91_0967_41CD_98E05CDA240A_mobile); visibleFunc(this.Image_9D1E7D60_8D97_0E9B_41D3_4A1CC427EE99_mobile)","width":"100%","verticalAlign":"middle","propagateClick":false,"height":"100%","left":"0%","backgroundOpacity":0},{"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"id":"sequence_83CC206A_8D93_376F_41E0_F1FCB70D275F"},{"id":"audiores_9F87951F_8E76_3570_41C0_3C94FA5B754B","class":"AudioResource","mp3Url":trans('audiores_9F87951F_8E76_3570_41C0_3C94FA5B754B.mp3Url')},{"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"id":"sequence_8332006A_8D93_376F_41C8_A91B2A691085"},{"id":"PanoramaPlayListItem_9FBF45EC_8E72_74D0_41D6_49A0AFB0AF3E","class":"PanoramaPlayListItem","camera":"this.panorama_837C5741_8D92_FA9D_41C9_342C42DFDF9D_camera","media":"this.panorama_837C5741_8D92_FA9D_41C9_342C42DFDF9D","player":"this.MainViewer_mobilePanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"id":"PanoramaPlayListItem_9FBF35EC_8E72_74D0_41DA_E548A1DD6CCA","class":"PanoramaPlayListItem","camera":"this.panorama_83D8DFFD_8D93_0965_41CB_B154F4E01621_camera","media":"this.panorama_83D8DFFD_8D93_0965_41CB_B154F4E01621","player":"this.MainViewer_mobilePanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"id":"PanoramaPlayListItem_9FBEC5EB_8E72_74D0_41E0_3D2335B6A7AD","class":"PanoramaPlayListItem","camera":"this.panorama_83D8383A_8D93_16EC_41CD_75E66254BF33_camera","media":"this.panorama_83D8383A_8D93_16EC_41CD_75E66254BF33","player":"this.MainViewer_mobilePanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"areas":["this.HotspotPanoramaOverlayArea_9FA0AD39_8D91_0EED_41E0_1A6FD71C4485"],"class":"HotspotPanoramaOverlay","maps":[],"items":[{"class":"HotspotPanoramaOverlayImage","distance":50,"data":{"label":"360_200dp_EA33F7_FILL0_wght400_GRAD0_opsz48"},"pitch":12.39,"image":"this.res_988E7D77_8D97_0965_41C8_9D78C48C77CE","yaw":21.52,"vfov":10.5,"hfov":10.5,"scaleMode":"fit_inside"}],"id":"overlay_9E500C31_8D91_0EFD_41E0_BFFE23ADAE8A","useHandCursor":true,"data":{"label":"360_200dp_EA33F7_FILL0_wght400_GRAD0_opsz48"}},{"hasAudio":false,"width":1280,"class":"VideoResource","levels":["this.videolevel_9D5CE200_8E72_6F50_41DE_DE378E815CE1"],"height":720,"id":"videores_9D74196C_8DF7_096B_41A8_183E001CC581"},{"areas":["this.HotspotPanoramaOverlayArea_9FAA40E7_8D91_F764_41E0_BE1D3F494206"],"class":"HotspotPanoramaOverlay","maps":[],"items":[{"class":"HotspotPanoramaOverlayImage","distance":50,"data":{"label":"360_200dp_EA33F7_FILL0_wght400_GRAD0_opsz48"},"pitch":16.19,"image":"this.res_988E7D77_8D97_0965_41C8_9D78C48C77CE","yaw":7.13,"vfov":10.5,"hfov":10.5,"scaleMode":"fit_inside"}],"id":"overlay_9E7E9FE1_8D91_099C_41D5_38E227B371C2","useHandCursor":true,"data":{"label":"360_200dp_EA33F7_FILL0_wght400_GRAD0_opsz48"}},{"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"id":"sequence_8332706B_8D93_376D_41C3_867E205604C2"},{"areas":["this.HotspotPanoramaOverlayArea_9F41E8A4_8D9F_179B_4195_5D22F64BE1E7"],"class":"HotspotPanoramaOverlay","maps":[],"items":[{"class":"HotspotPanoramaOverlayImage","roll":2.64,"distance":50,"data":{"label":"360_200dp_EA33F7_FILL0_wght400_GRAD0_opsz48"},"pitch":13.43,"image":"this.res_988E7D77_8D97_0965_41C8_9D78C48C77CE","yaw":-13.53,"vfov":8.3,"hfov":11.31,"scaleMode":"fit_inside"}],"id":"overlay_9E81D767_8D9F_1965_41E0_674B8E4A886E","useHandCursor":true,"data":{"label":"360_200dp_EA33F7_FILL0_wght400_GRAD0_opsz48"}},{"hasAudio":false,"width":1920,"class":"VideoResource","levels":["this.videolevel_9D5C61DF_8E72_6CF1_41C4_29A518839CEE"],"height":1080,"id":"videores_8267E8BF_8D93_37E5_41C1_D6A617E82967"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_9FA0AD39_8D91_0EED_41E0_1A6FD71C4485","class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_9E0A0480_8D91_1F9C_41D8_33EEB08B5D14, 'showEffect', false)}.bind(this); visibleFunc(this.Image_9DD65D76_8D91_0967_41CD_98E05CDA240A_mobile); visibleFunc(this.Image_8243AB23_8D93_0A9C_41C8_B4749D3C8CD6_mobile); visibleFunc(this.Image_9D0B35F0_8D97_397B_41CD_A09FBB373CE9_mobile); visibleFunc(this.Image_9D1E7D60_8D97_0E9B_41D3_4A1CC427EE99_mobile)"},{"levels":[{"height":168,"class":"ImageResourceLevel","url":"media/res_988E7D77_8D97_0965_41C8_9D78C48C77CE_0.png","width":168}],"id":"res_988E7D77_8D97_0965_41C8_9D78C48C77CE","class":"ImageResource"},{"url":trans('videolevel_9D5CE200_8E72_6F50_41DE_DE378E815CE1.url'),"width":1280,"class":"VideoResourceLevel","type":"video/mp4","framerate":59.94,"height":720,"id":"videolevel_9D5CE200_8E72_6F50_41DE_DE378E815CE1","posterURL":trans('videolevel_9D5CE200_8E72_6F50_41DE_DE378E815CE1.posterURL'),"bitrate":4143},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_9FAA40E7_8D91_F764_41E0_BE1D3F494206","class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_9E16B835_8D91_36E5_41D9_3B8966F19732, 'showEffect', false)}.bind(this); visibleFunc(this.Image_9DD65D76_8D91_0967_41CD_98E05CDA240A_mobile); visibleFunc(this.Image_8243AB23_8D93_0A9C_41C8_B4749D3C8CD6_mobile); visibleFunc(this.Image_9D0B35F0_8D97_397B_41CD_A09FBB373CE9_mobile); visibleFunc(this.Image_9D1E7D60_8D97_0E9B_41D3_4A1CC427EE99_mobile)"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_9F41E8A4_8D9F_179B_4195_5D22F64BE1E7","class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_9942C46E_8D91_1F64_41D6_1245D2AC4E0D, 'showEffect', false)}.bind(this); visibleFunc(this.Image_9DD65D76_8D91_0967_41CD_98E05CDA240A_mobile); visibleFunc(this.Image_8243AB23_8D93_0A9C_41C8_B4749D3C8CD6_mobile); visibleFunc(this.Image_9D0B35F0_8D97_397B_41CD_A09FBB373CE9_mobile); visibleFunc(this.Image_9D1E7D60_8D97_0E9B_41D3_4A1CC427EE99_mobile)"},{"url":trans('videolevel_9D5C61DF_8E72_6CF1_41C4_29A518839CEE.url'),"width":1920,"class":"VideoResourceLevel","type":"video/mp4","framerate":59.94,"height":1080,"id":"videolevel_9D5C61DF_8E72_6CF1_41C4_29A518839CEE","posterURL":trans('videolevel_9D5C61DF_8E72_6CF1_41C4_29A518839CEE.posterURL'),"bitrate":9321}],"scripts":{"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getPixels":TDV.Tour.Script.getPixels,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"resumePlayers":TDV.Tour.Script.resumePlayers,"showWindow":TDV.Tour.Script.showWindow,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getMainViewer":TDV.Tour.Script.getMainViewer,"setMapLocation":TDV.Tour.Script.setMapLocation,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"initQuiz":TDV.Tour.Script.initQuiz,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"showPopupImage":TDV.Tour.Script.showPopupImage,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"initAnalytics":TDV.Tour.Script.initAnalytics,"playAudioList":TDV.Tour.Script.playAudioList,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"init":TDV.Tour.Script.init,"cloneBindings":TDV.Tour.Script.cloneBindings,"registerKey":TDV.Tour.Script.registerKey,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setLocale":TDV.Tour.Script.setLocale,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setValue":TDV.Tour.Script.setValue,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"translate":TDV.Tour.Script.translate,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getMediaByName":TDV.Tour.Script.getMediaByName,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"downloadFile":TDV.Tour.Script.downloadFile,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"startMeasurement":TDV.Tour.Script.startMeasurement,"shareSocial":TDV.Tour.Script.shareSocial,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"textToSpeech":TDV.Tour.Script.textToSpeech,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"quizFinish":TDV.Tour.Script.quizFinish,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"quizStart":TDV.Tour.Script.quizStart,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"unregisterKey":TDV.Tour.Script.unregisterKey,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"quizShowScore":TDV.Tour.Script.quizShowScore,"isPanorama":TDV.Tour.Script.isPanorama,"clone":TDV.Tour.Script.clone,"historyGoForward":TDV.Tour.Script.historyGoForward,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getKey":TDV.Tour.Script.getKey,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"executeJS":TDV.Tour.Script.executeJS,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"mixObject":TDV.Tour.Script.mixObject,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"openLink":TDV.Tour.Script.openLink,"existsKey":TDV.Tour.Script.existsKey,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getComponentByName":TDV.Tour.Script.getComponentByName,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"historyGoBack":TDV.Tour.Script.historyGoBack,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getOverlays":TDV.Tour.Script.getOverlays,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"createTween":TDV.Tour.Script.createTween,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility},"watermark":false,"backgroundPreloadEnabled":false,"buttonToggleMute":"this.IconButton_9E0E7D57_8E6F_D5F0_41B0_0592C7D912AC","height":"100%","width":"100%","propagateClick":false,"backgroundColorRatios":[0],"left":352.4,"layout":"absolute","scrollBarColor":"#000000"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var a = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return a;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.2.18.js.map
})();
//Generated with v2022.2.18, Sat Aug 9 2025