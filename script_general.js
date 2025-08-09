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
var script = {"defaultMenu":["fullscreen","mute","rotation"],"id":"rootPlayer","start":"this.get('data').surfaceSelectionHotspotMode = 'circleEnabled'; this.init(); this.playAudioList([this.audio_9B9DDD1B_8E71_0EAC_41CA_C8538C66E9B1], true)","data":{"locales":{"en":"locale/en.txt"},"history":{},"textToSpeechConfig":{"stopBackgroundAudio":false,"volume":1,"speechOnTooltip":false,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"rate":1,"pitch":1},"name":"Player16255","defaultLocale":"en"},"children":["this.MainViewer","this.Image_8243AB23_8D93_0A9C_41C8_B4749D3C8CD6","this.Image_9D0B35F0_8D97_397B_41CD_A09FBB373CE9","this.Image_9D1E7D60_8D97_0E9B_41D3_4A1CC427EE99","this.Image_9DD65D76_8D91_0967_41CD_98E05CDA240A"],"minHeight":0,"class":"Player","minWidth":0,"backgroundColor":["#FFFFFF"],"hash": "2560231a4601a29827f379f5aeab7314b72ddb4ab5d264a21a3b4a2e97ef9690", "definitions": [{"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesFontSize":"3vmin","subtitlesBackgroundOpacity":0.2,"firstTransitionDuration":0,"playbackBarHeadShadowColor":"#000000","toolTipShadowColor":"#333138","data":{"name":"Main Viewer"},"toolTipPaddingLeft":6,"subtitlesBorderColor":"#FFFFFF","playbackBarHeadBorderSize":0,"class":"ViewerArea","progressRight":"33%","progressBorderSize":0,"toolTipTextShadowColor":"#000000","minWidth":100,"toolTipFontFamily":"Arial","playbackBarHeadShadow":true,"playbackBarHeadWidth":6,"playbackBarHeight":10,"progressOpacity":0.7,"playbackBarBorderColor":"#FFFFFF","minHeight":50,"subtitlesFontFamily":"Arial","playbackBarProgressBorderColor":"#000000","vrPointerSelectionTime":2000,"progressLeft":"33%","progressBarBackgroundColor":["#3399FF"],"playbackBarProgressBorderSize":0,"progressBarBorderRadius":2,"playbackBarBackgroundColorDirection":"vertical","progressBarBorderSize":0,"subtitlesGap":0,"playbackBarBackgroundOpacity":1,"playbackBarRight":0,"playbackBarHeadBorderRadius":0,"vrPointerSelectionColor":"#FF6600","subtitlesBackgroundColor":"#000000","playbackBarProgressBorderRadius":0,"toolTipPaddingTop":4,"progressBackgroundColorRatios":[0],"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadBorderColor":"#000000","subtitlesTextShadowOpacity":1,"playbackBarBorderRadius":0,"playbackBarProgressBackgroundColor":["#3399FF"],"progressBackgroundColor":["#000000"],"toolTipFontColor":"#606060","height":"100%","subtitlesFontColor":"#FFFFFF","playbackBarBorderSize":0,"width":"100%","playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBarBorderColor":"#000000","progressBarBackgroundColorRatios":[0],"toolTipFontSize":"1.11vmin","subtitlesBottom":50,"playbackBarBottom":5,"progressBorderRadius":2,"toolTipBorderColor":"#767676","toolTipBackgroundColor":"#F6F6F6","progressHeight":2,"playbackBarHeadShadowBlurRadius":3,"progressBarBackgroundColorDirection":"horizontal","playbackBarHeadShadowOpacity":0.7,"surfaceReticleColor":"#FFFFFF","toolTipPaddingRight":6,"subtitlesTextShadowVerticalLength":1,"vrPointerColor":"#FFFFFF","surfaceReticleSelectionColor":"#FFFFFF","toolTipPaddingBottom":4,"playbackBarProgressBackgroundColorRatios":[0],"progressBottom":10,"playbackBarLeft":0,"playbackBarHeadHeight":15,"subtitlesTop":0,"propagateClick":false,"subtitlesTextShadowColor":"#000000","id":"MainViewer","playbackBarBackgroundColor":["#FFFFFF"],"progressBorderColor":"#000000"},{"id":"Image_9DD65D76_8D91_0967_41CD_98E05CDA240A","right":"34%","data":{"name":"Image18044"},"class":"Image","minHeight":1,"minWidth":1,"url":trans('Image_9DD65D76_8D91_0967_41CD_98E05CDA240A.url'),"scaleMode":"fit_inside","bottom":"1.66%","horizontalAlign":"center","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_9BDFC252_8E91_1ABC_41E1_3265E53BBDE9, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 2); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_99E740D2_8D91_17BF_41CC_78E8B87AFC77, 'hideEffect', false)}.bind(this); invisibleFunc(this.Image_9D1E7D60_8D97_0E9B_41D3_4A1CC427EE99); invisibleFunc(this.Image_9D0B35F0_8D97_397B_41CD_A09FBB373CE9); invisibleFunc(this.Image_8243AB23_8D93_0A9C_41C8_B4749D3C8CD6); invisibleFunc(this.Image_9DD65D76_8D91_0967_41CD_98E05CDA240A)","width":"30%","propagateClick":false,"height":"30%","verticalAlign":"middle","visible":false,"backgroundOpacity":0,"cursor":"hand"},{"class":"FadeInEffect","id":"effect_9E0A0480_8D91_1F9C_41D8_33EEB08B5D14","duration":500},{"changing":"var event = arguments[0]; this.changePlayListWithSameSpot(event.source, event.data.nextSelectedIndex)","class":"PlayList","id":"mainPlayList","items":["this.PanoramaPlayListItem_9BDF5251_8E91_1ABC_41D0_BB295FFAF2FF","this.PanoramaPlayListItem_9BDF8251_8E91_1ABC_41BA_33FE78A7EEF9","this.PanoramaPlayListItem_9BDFC252_8E91_1ABC_41E1_3265E53BBDE9",{"player":"this.MainViewerVideoPlayer","end":"this.trigger('tourEnded')","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.mainPlayList, 3, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 3)","class":"VideoPlayListItem","media":"this.video_8273E621_8D93_7A9C_41C3_C119F0974B3F","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 0)"}]},{"displayPlaybackBar":true,"displayPlayOverlay":true,"clickAction":"play_pause","class":"VideoPlayer","id":"MainViewerVideoPlayer","viewerArea":"this.MainViewer"},{"class":"FadeInEffect","id":"effect_9942C46E_8D91_1F64_41D6_1245D2AC4E0D","duration":500},{"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"initialSequence":"this.sequence_8332706B_8D93_376D_41C3_867E205604C2","enterPointingToHorizon":true,"class":"PanoramaCamera","id":"panorama_83D8383A_8D93_16EC_41CD_75E66254BF33_camera"},{"label":trans('video_8273E621_8D93_7A9C_41C3_C119F0974B3F.label'),"video":"this.videores_8267E8BF_8D93_37E5_41C1_D6A617E82967","thumbnailUrl":"media/video_8273E621_8D93_7A9C_41C3_C119F0974B3F_t.jpg","data":{"label":"55"},"width":1920,"height":1080,"class":"Video","id":"video_8273E621_8D93_7A9C_41C3_C119F0974B3F"},{"class":"FadeOutEffect","id":"effect_9951A362_8D91_1A9F_41B9_90F5FDD73A0E","duration":500},{"right":"34%","data":{"name":"Image17943"},"class":"Image","minHeight":1,"minWidth":1,"url":trans('Image_9D0B35F0_8D97_397B_41CD_A09FBB373CE9.url'),"top":"3.67%","scaleMode":"fit_inside","horizontalAlign":"center","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_9BDF5251_8E91_1ABC_41D0_BB295FFAF2FF, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 0); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_994B012A_8D97_76EC_41E0_AF45071F8190, 'hideEffect', false)}.bind(this); invisibleFunc(this.Image_9D1E7D60_8D97_0E9B_41D3_4A1CC427EE99); invisibleFunc(this.Image_9D0B35F0_8D97_397B_41CD_A09FBB373CE9); invisibleFunc(this.Image_8243AB23_8D93_0A9C_41C8_B4749D3C8CD6); invisibleFunc(this.Image_9DD65D76_8D91_0967_41CD_98E05CDA240A)","width":"30%","propagateClick":false,"height":"30%","verticalAlign":"middle","visible":false,"backgroundOpacity":0,"id":"Image_9D0B35F0_8D97_397B_41CD_A09FBB373CE9","cursor":"hand"},{"label":trans('panorama_83D8383A_8D93_16EC_41CD_75E66254BF33.label'),"hfovMax":130,"data":{"label":"dji_fly_\u06f2\u06f0\u06f2\u06f2\u06f0\u06f9\u06f1\u06f0_\u06f1\u06f9\u06f3\u06f1\u06f4\u06f4_874_1662822857216_pano_optimized"},"thumbnailUrl":"media/panorama_83D8383A_8D93_16EC_41CD_75E66254BF33_t.jpg","frames":[{"thumbnailUrl":"media/panorama_83D8383A_8D93_16EC_41CD_75E66254BF33_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"tags":"ondemand","class":"TiledImageResourceLevel","colCount":18,"width":9216,"rowCount":3,"height":1536,"url":"media/panorama_83D8383A_8D93_16EC_41CD_75E66254BF33_0/{face}/0/{row}_{column}.jpg"},{"tags":"ondemand","class":"TiledImageResourceLevel","colCount":12,"width":6144,"rowCount":2,"height":1024,"url":"media/panorama_83D8383A_8D93_16EC_41CD_75E66254BF33_0/{face}/1/{row}_{column}.jpg"},{"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6,"width":3072,"rowCount":1,"height":512,"url":"media/panorama_83D8383A_8D93_16EC_41CD_75E66254BF33_0/{face}/2/{row}_{column}.jpg"},{"tags":"mobilevr","class":"TiledImageResourceLevel","colCount":6,"width":9216,"rowCount":1,"height":1536,"url":"media/panorama_83D8383A_8D93_16EC_41CD_75E66254BF33_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"class":"Panorama","hfovMin":"150%","overlays":["this.overlay_9E500C31_8D91_0EFD_41E0_BFFE23ADAE8A"],"vfov":180,"id":"panorama_83D8383A_8D93_16EC_41CD_75E66254BF33","hfov":360},{"label":trans('panorama_837C5741_8D92_FA9D_41C9_342C42DFDF9D.label'),"hfovMax":130,"data":{"label":"d (7)"},"thumbnailUrl":"media/panorama_837C5741_8D92_FA9D_41C9_342C42DFDF9D_t.jpg","frames":[{"thumbnailUrl":"media/panorama_837C5741_8D92_FA9D_41C9_342C42DFDF9D_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"tags":"ondemand","class":"TiledImageResourceLevel","colCount":18,"width":9216,"rowCount":3,"height":1536,"url":"media/panorama_837C5741_8D92_FA9D_41C9_342C42DFDF9D_0/{face}/0/{row}_{column}.jpg"},{"tags":"ondemand","class":"TiledImageResourceLevel","colCount":12,"width":6144,"rowCount":2,"height":1024,"url":"media/panorama_837C5741_8D92_FA9D_41C9_342C42DFDF9D_0/{face}/1/{row}_{column}.jpg"},{"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6,"width":3072,"rowCount":1,"height":512,"url":"media/panorama_837C5741_8D92_FA9D_41C9_342C42DFDF9D_0/{face}/2/{row}_{column}.jpg"},{"tags":"mobilevr","class":"TiledImageResourceLevel","colCount":6,"width":9216,"rowCount":1,"height":1536,"url":"media/panorama_837C5741_8D92_FA9D_41C9_342C42DFDF9D_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"class":"Panorama","hfovMin":"150%","overlays":["this.overlay_9E81D767_8D9F_1965_41E0_674B8E4A886E"],"vfov":180,"id":"panorama_837C5741_8D92_FA9D_41C9_342C42DFDF9D","hfov":360},{"label":trans('video_9C4BD882_8DF7_179C_41D6_A2D9089924BE.label'),"video":"this.videores_9D74196C_8DF7_096B_41A8_183E001CC581","thumbnailUrl":"media/video_9C4BD882_8DF7_179C_41D6_A2D9089924BE_t.jpg","data":{"label":"\u0645\u0646\u0637\u0642\u06473 \u067e\u0627\u062f\u0646\u0627"},"width":1280,"height":720,"class":"Video","id":"video_9C4BD882_8DF7_179C_41D6_A2D9089924BE"},{"id":"Image_8243AB23_8D93_0A9C_41C8_B4749D3C8CD6","data":{"name":"Image17075"},"class":"Image","minHeight":1,"minWidth":1,"url":trans('Image_8243AB23_8D93_0A9C_41C8_B4749D3C8CD6.url'),"scaleMode":"fit_outside","bottom":"0%","horizontalAlign":"center","show":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_9CBF2F2F_8D91_0AE5_41CB_944B9F12E456, 'showEffect', false)}.bind(this); visibleFunc(this.Image_9D1E7D60_8D97_0E9B_41D3_4A1CC427EE99); visibleFunc(this.Image_9D0B35F0_8D97_397B_41CD_A09FBB373CE9); visibleFunc(this.Image_9DD65D76_8D91_0967_41CD_98E05CDA240A)","width":"100%","verticalAlign":"middle","propagateClick":false,"height":"100%","left":"0%","backgroundOpacity":0},{"label":trans('panorama_83D8DFFD_8D93_0965_41CB_B154F4E01621.label'),"hfovMax":130,"data":{"label":"d (12)"},"thumbnailUrl":"media/panorama_83D8DFFD_8D93_0965_41CB_B154F4E01621_t.jpg","frames":[{"thumbnailUrl":"media/panorama_83D8DFFD_8D93_0965_41CB_B154F4E01621_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"tags":"ondemand","class":"TiledImageResourceLevel","colCount":18,"width":9216,"rowCount":3,"height":1536,"url":"media/panorama_83D8DFFD_8D93_0965_41CB_B154F4E01621_0/{face}/0/{row}_{column}.jpg"},{"tags":"ondemand","class":"TiledImageResourceLevel","colCount":12,"width":6144,"rowCount":2,"height":1024,"url":"media/panorama_83D8DFFD_8D93_0965_41CB_B154F4E01621_0/{face}/1/{row}_{column}.jpg"},{"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6,"width":3072,"rowCount":1,"height":512,"url":"media/panorama_83D8DFFD_8D93_0965_41CB_B154F4E01621_0/{face}/2/{row}_{column}.jpg"},{"tags":"mobilevr","class":"TiledImageResourceLevel","colCount":6,"width":9216,"rowCount":1,"height":1536,"url":"media/panorama_83D8DFFD_8D93_0965_41CB_B154F4E01621_0/{face}/vr/0.jpg"}],"class":"ImageResource"}}],"class":"Panorama","hfovMin":"150%","overlays":["this.overlay_9E7E9FE1_8D91_099C_41D5_38E227B371C2"],"vfov":180,"id":"panorama_83D8DFFD_8D93_0965_41CB_B154F4E01621","hfov":360},{"class":"FadeOutEffect","id":"effect_99E740D2_8D91_17BF_41CC_78E8B87AFC77","duration":500},{"id":"MainViewerPanoramaPlayer","mode":"quality","viewerArea":"this.MainViewer","arrowKeysAction":"translate","touchControlMode":"drag_rotation","aaEnabled":true,"adjacentPanoramaPositionsEnabled":true,"mouseControlMode":"drag_rotation","class":"PanoramaPlayer","surfaceSelectionEnabled":true},{"id":"Image_9D1E7D60_8D97_0E9B_41D3_4A1CC427EE99","right":"34%","data":{"name":"Image17995"},"class":"Image","minHeight":1,"minWidth":1,"url":trans('Image_9D1E7D60_8D97_0E9B_41D3_4A1CC427EE99.url'),"scaleMode":"fit_inside","bottom":"34%","horizontalAlign":"center","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_9BDF8251_8E91_1ABC_41BA_33FE78A7EEF9, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 1); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_9951A362_8D91_1A9F_41B9_90F5FDD73A0E, 'hideEffect', false)}.bind(this); invisibleFunc(this.Image_9D1E7D60_8D97_0E9B_41D3_4A1CC427EE99); invisibleFunc(this.Image_9D0B35F0_8D97_397B_41CD_A09FBB373CE9); invisibleFunc(this.Image_8243AB23_8D93_0A9C_41C8_B4749D3C8CD6); invisibleFunc(this.Image_9DD65D76_8D91_0967_41CD_98E05CDA240A)","width":"30%","propagateClick":false,"height":"30%","verticalAlign":"middle","visible":false,"backgroundOpacity":0,"cursor":"hand"},{"autoplay":true,"class":"MediaAudio","id":"audio_9B9DDD1B_8E71_0EAC_41CA_C8538C66E9B1","loop":true,"data":{"label":"Faramarz Aslani - To"},"audio":"this.audiores_981CF10F_8E71_16A5_41D9_2DEE89C3C086"},{"class":"FadeOutEffect","id":"effect_994B012A_8D97_76EC_41E0_AF45071F8190","duration":500},{"class":"FadeInEffect","id":"effect_9CBF2F2F_8D91_0AE5_41CB_944B9F12E456","duration":8000},{"class":"FadeInEffect","id":"effect_9E16B835_8D91_36E5_41D9_3B8966F19732","duration":500},{"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"initialSequence":"this.sequence_8332006A_8D93_376F_41C8_A91B2A691085","enterPointingToHorizon":true,"class":"PanoramaCamera","id":"panorama_83D8DFFD_8D93_0965_41CB_B154F4E01621_camera"},{"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"initialSequence":"this.sequence_83CC206A_8D93_376F_41E0_F1FCB70D275F","enterPointingToHorizon":true,"class":"PanoramaCamera","id":"panorama_837C5741_8D92_FA9D_41C9_342C42DFDF9D_camera"},{"id":"PanoramaPlayListItem_9BDF5251_8E91_1ABC_41D0_BB295FFAF2FF","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_837C5741_8D92_FA9D_41C9_342C42DFDF9D_camera","class":"PanoramaPlayListItem","media":"this.panorama_837C5741_8D92_FA9D_41C9_342C42DFDF9D","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"id":"PanoramaPlayListItem_9BDF8251_8E91_1ABC_41BA_33FE78A7EEF9","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_83D8DFFD_8D93_0965_41CB_B154F4E01621_camera","class":"PanoramaPlayListItem","media":"this.panorama_83D8DFFD_8D93_0965_41CB_B154F4E01621","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"id":"PanoramaPlayListItem_9BDFC252_8E91_1ABC_41E1_3265E53BBDE9","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_83D8383A_8D93_16EC_41CD_75E66254BF33_camera","class":"PanoramaPlayListItem","media":"this.panorama_83D8383A_8D93_16EC_41CD_75E66254BF33","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"class":"PanoramaCameraSequence","id":"sequence_8332706B_8D93_376D_41C3_867E205604C2","movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in"},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out"}]},{"class":"VideoResource","hasAudio":false,"width":1920,"levels":["this.videolevel_9BBB1076_8E91_1767_4190_F5EEC97CE595"],"height":1080,"id":"videores_8267E8BF_8D93_37E5_41C1_D6A617E82967"},{"areas":["this.HotspotPanoramaOverlayArea_9FA0AD39_8D91_0EED_41E0_1A6FD71C4485"],"id":"overlay_9E500C31_8D91_0EFD_41E0_BFFE23ADAE8A","maps":[],"items":[{"distance":50,"data":{"label":"360_200dp_EA33F7_FILL0_wght400_GRAD0_opsz48"},"pitch":12.39,"image":"this.res_988E7D77_8D97_0965_41C8_9D78C48C77CE","yaw":21.52,"vfov":10.5,"hfov":10.5,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage"}],"class":"HotspotPanoramaOverlay","useHandCursor":true,"data":{"label":"360_200dp_EA33F7_FILL0_wght400_GRAD0_opsz48"}},{"areas":["this.HotspotPanoramaOverlayArea_9F41E8A4_8D9F_179B_4195_5D22F64BE1E7"],"id":"overlay_9E81D767_8D9F_1965_41E0_674B8E4A886E","maps":[],"items":[{"roll":2.64,"distance":50,"data":{"label":"360_200dp_EA33F7_FILL0_wght400_GRAD0_opsz48"},"pitch":13.43,"image":"this.res_988E7D77_8D97_0965_41C8_9D78C48C77CE","yaw":-13.53,"vfov":8.3,"hfov":11.31,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage"}],"class":"HotspotPanoramaOverlay","useHandCursor":true,"data":{"label":"360_200dp_EA33F7_FILL0_wght400_GRAD0_opsz48"}},{"class":"VideoResource","hasAudio":false,"width":1280,"levels":["this.videolevel_9BBB2097_8E91_17A5_41D7_FE3B8273333A"],"height":720,"id":"videores_9D74196C_8DF7_096B_41A8_183E001CC581"},{"areas":["this.HotspotPanoramaOverlayArea_9FAA40E7_8D91_F764_41E0_BE1D3F494206"],"id":"overlay_9E7E9FE1_8D91_099C_41D5_38E227B371C2","maps":[],"items":[{"distance":50,"data":{"label":"360_200dp_EA33F7_FILL0_wght400_GRAD0_opsz48"},"pitch":16.19,"image":"this.res_988E7D77_8D97_0965_41C8_9D78C48C77CE","yaw":7.13,"vfov":10.5,"hfov":10.5,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage"}],"class":"HotspotPanoramaOverlay","useHandCursor":true,"data":{"label":"360_200dp_EA33F7_FILL0_wght400_GRAD0_opsz48"}},{"class":"AudioResource","id":"audiores_981CF10F_8E71_16A5_41D9_2DEE89C3C086","mp3Url":trans('audiores_981CF10F_8E71_16A5_41D9_2DEE89C3C086.mp3Url')},{"class":"PanoramaCameraSequence","id":"sequence_8332006A_8D93_376F_41C8_A91B2A691085","movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in"},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out"}]},{"class":"PanoramaCameraSequence","id":"sequence_83CC206A_8D93_376F_41E0_F1FCB70D275F","movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in"},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out"}]},{"class":"VideoResourceLevel","url":trans('videolevel_9BBB1076_8E91_1767_4190_F5EEC97CE595.url'),"bitrate":9321,"type":"video/mp4","framerate":59.94,"height":1080,"id":"videolevel_9BBB1076_8E91_1767_4190_F5EEC97CE595","width":1920,"posterURL":trans('videolevel_9BBB1076_8E91_1767_4190_F5EEC97CE595.posterURL')},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_9FA0AD39_8D91_0EED_41E0_1A6FD71C4485","class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_9E0A0480_8D91_1F9C_41D8_33EEB08B5D14, 'showEffect', false)}.bind(this); visibleFunc(this.Image_9D1E7D60_8D97_0E9B_41D3_4A1CC427EE99); visibleFunc(this.Image_9D0B35F0_8D97_397B_41CD_A09FBB373CE9); visibleFunc(this.Image_8243AB23_8D93_0A9C_41C8_B4749D3C8CD6); visibleFunc(this.Image_9DD65D76_8D91_0967_41CD_98E05CDA240A)"},{"levels":[{"class":"ImageResourceLevel","width":168,"height":168,"url":"media/res_988E7D77_8D97_0965_41C8_9D78C48C77CE_0.png"}],"class":"ImageResource","id":"res_988E7D77_8D97_0965_41C8_9D78C48C77CE"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_9F41E8A4_8D9F_179B_4195_5D22F64BE1E7","class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_9942C46E_8D91_1F64_41D6_1245D2AC4E0D, 'showEffect', false)}.bind(this); visibleFunc(this.Image_9D1E7D60_8D97_0E9B_41D3_4A1CC427EE99); visibleFunc(this.Image_9D0B35F0_8D97_397B_41CD_A09FBB373CE9); visibleFunc(this.Image_8243AB23_8D93_0A9C_41C8_B4749D3C8CD6); visibleFunc(this.Image_9DD65D76_8D91_0967_41CD_98E05CDA240A)"},{"class":"VideoResourceLevel","url":trans('videolevel_9BBB2097_8E91_17A5_41D7_FE3B8273333A.url'),"bitrate":4143,"type":"video/mp4","framerate":59.94,"height":720,"id":"videolevel_9BBB2097_8E91_17A5_41D7_FE3B8273333A","width":1280,"posterURL":trans('videolevel_9BBB2097_8E91_17A5_41D7_FE3B8273333A.posterURL')},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_9FAA40E7_8D91_F764_41E0_BE1D3F494206","class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_9E16B835_8D91_36E5_41D9_3B8966F19732, 'showEffect', false)}.bind(this); visibleFunc(this.Image_9D1E7D60_8D97_0E9B_41D3_4A1CC427EE99); visibleFunc(this.Image_9D0B35F0_8D97_397B_41CD_A09FBB373CE9); visibleFunc(this.Image_8243AB23_8D93_0A9C_41C8_B4749D3C8CD6); visibleFunc(this.Image_9DD65D76_8D91_0967_41CD_98E05CDA240A)"}],"gap":10,"scrollBarMargin":2,"scripts":{"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getPixels":TDV.Tour.Script.getPixels,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"historyGoForward":TDV.Tour.Script.historyGoForward,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getMediaByName":TDV.Tour.Script.getMediaByName,"showWindow":TDV.Tour.Script.showWindow,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"registerKey":TDV.Tour.Script.registerKey,"getMainViewer":TDV.Tour.Script.getMainViewer,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"isPanorama":TDV.Tour.Script.isPanorama,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"startMeasurement":TDV.Tour.Script.startMeasurement,"downloadFile":TDV.Tour.Script.downloadFile,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"init":TDV.Tour.Script.init,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"cloneBindings":TDV.Tour.Script.cloneBindings,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setLocale":TDV.Tour.Script.setLocale,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"historyGoBack":TDV.Tour.Script.historyGoBack,"setValue":TDV.Tour.Script.setValue,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"translate":TDV.Tour.Script.translate,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"executeJS":TDV.Tour.Script.executeJS,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"resumePlayers":TDV.Tour.Script.resumePlayers,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setMapLocation":TDV.Tour.Script.setMapLocation,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"initQuiz":TDV.Tour.Script.initQuiz,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"clone":TDV.Tour.Script.clone,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getOverlays":TDV.Tour.Script.getOverlays,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"showPopupImage":TDV.Tour.Script.showPopupImage,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"unregisterKey":TDV.Tour.Script.unregisterKey,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getKey":TDV.Tour.Script.getKey,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"textToSpeech":TDV.Tour.Script.textToSpeech,"initAnalytics":TDV.Tour.Script.initAnalytics,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"mixObject":TDV.Tour.Script.mixObject,"existsKey":TDV.Tour.Script.existsKey,"quizFinish":TDV.Tour.Script.quizFinish,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"openLink":TDV.Tour.Script.openLink,"quizStart":TDV.Tour.Script.quizStart,"shareSocial":TDV.Tour.Script.shareSocial,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"playAudioList":TDV.Tour.Script.playAudioList,"getComponentByName":TDV.Tour.Script.getComponentByName,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"quizShowScore":TDV.Tour.Script.quizShowScore,"createTween":TDV.Tour.Script.createTween,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID},"watermark":false,"height":"100%","width":"100%","propagateClick":false,"backgroundColorRatios":[0],"left":352.4,"layout":"absolute","scrollBarColor":"#000000"};
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