'use strict';
const _0x396766 = _0x4065;
(function (_0x4a6285, _0x34e293) {
    const _0x28c84e = _0x4065, _0x14f303 = _0x4a6285();
    while (!![]) {
        try {
            const _0x274810 = -parseInt(_0x28c84e(0x192)) / (-0x169e + -0xb57 * -0x1 + 0xb48) + -parseInt(_0x28c84e(0x1b1)) / (-0x11 * -0x4c + -0x1c8 + -0x342) + -parseInt(_0x28c84e(0x1c9)) / (-0x177c + -0x35f * 0x3 + 0x219c) * (-parseInt(_0x28c84e(0x1de)) / (0x5 * -0x3cb + -0x156 + 0x1451)) + parseInt(_0x28c84e(0x1d1)) / (0x7 * 0x28e + -0x42a + 0x491 * -0x3) + -parseInt(_0x28c84e(0x191)) / (0x39 + -0x1 * 0xb15 + 0x1 * 0xae2) * (parseInt(_0x28c84e(0x1a5)) / (0x119 * -0x4 + -0x1 * -0x51e + -0xb3)) + parseInt(_0x28c84e(0x185)) / (-0xd * -0x1cf + 0x3 * 0x255 + 0x1e7a * -0x1) * (-parseInt(_0x28c84e(0x195)) / (0xfa7 + -0x3 * -0x839 + 0x1 * -0x2849)) + -parseInt(_0x28c84e(0x1a6)) / (-0xab7 + 0x106e + -0x5ad) * (-parseInt(_0x28c84e(0x1a9)) / (-0x1 * -0x2479 + 0x71b + -0x2b89));
            if (_0x274810 === _0x34e293)
                break;
            else
                _0x14f303['push'](_0x14f303['shift']());
        } catch (_0x38beec) {
            _0x14f303['push'](_0x14f303['shift']());
        }
    }
}(_0x54f9, -0x3793 * 0x37 + -0xe4d77 + 0x2422fc));
var __importDefault = this && this[_0x396766(0x1a4) + _0x396766(0x197)] || function (_0x4a8280) {
    const _0x36c8cd = _0x396766;
    return _0x4a8280 && _0x4a8280[_0x36c8cd(0x1c6)] ? _0x4a8280 : { 'default': _0x4a8280 };
};
function _0x4065(_0x482fa1, _0x4f8d5f) {
    const _0x392b4c = _0x54f9();
    return _0x4065 = function (_0x20fc60, _0x147846) {
        _0x20fc60 = _0x20fc60 - (0x7 * 0x209 + 0x16 * 0x116 + -0x24a1);
        let _0x8600bc = _0x392b4c[_0x20fc60];
        return _0x8600bc;
    }, _0x4065(_0x482fa1, _0x4f8d5f);
}
const _0x434c99 = {};
_0x434c99[_0x396766(0x1d3)] = !![], Object[_0x396766(0x1da) + _0x396766(0x18c)](exports, _0x396766(0x1c6), _0x434c99), exports[_0x396766(0x1b6)] = exports[_0x396766(0x1d8)] = exports[_0x396766(0x193)] = exports[_0x396766(0x1ce)] = exports[_0x396766(0x1b5)] = void (0x5f5 + -0x1 * -0x83f + 0x194 * -0x9);
const socket_1 = require(_0x396766(0x18e) + _0x396766(0x1ab)), wbot_1 = require(_0x396766(0x183) + 'ot'), StartWhatsAppSession_1 = require(_0x396766(0x1cd) + _0x396766(0x1db) + _0x396766(0x1d9) + _0x396766(0x1a3) + _0x396766(0x19f)), CreateWhatsAppService_1 = __importDefault(require(_0x396766(0x1cd) + _0x396766(0x1ba) + _0x396766(0x1ad) + _0x396766(0x1ae) + _0x396766(0x1d5))), DeleteWhatsAppService_1 = __importDefault(require(_0x396766(0x1cd) + _0x396766(0x1ba) + _0x396766(0x19c) + _0x396766(0x1bb) + _0x396766(0x1d5))), ListWhatsAppsService_1 = __importDefault(require(_0x396766(0x1cd) + _0x396766(0x1ba) + _0x396766(0x189) + _0x396766(0x1a8) + _0x396766(0x1aa))), ShowWhatsAppService_1 = __importDefault(require(_0x396766(0x1cd) + _0x396766(0x1ba) + _0x396766(0x1d6) + _0x396766(0x1a7) + _0x396766(0x1cb))), UpdateWhatsAppService_1 = __importDefault(require(_0x396766(0x1cd) + _0x396766(0x1ba) + _0x396766(0x1ca) + _0x396766(0x18f) + _0x396766(0x1d5))), index = async (_0x1fbc65, _0x15642b) => {
        const _0x1e08ff = _0x396766, {companyId: _0x5b335d} = _0x1fbc65[_0x1e08ff(0x1bd)], {session: _0x46f092} = _0x1fbc65[_0x1e08ff(0x1b9)], _0x414b9b = {};
        _0x414b9b[_0x1e08ff(0x18a)] = _0x5b335d, _0x414b9b[_0x1e08ff(0x190)] = _0x46f092;
        const _0x2f3281 = await (0x1 * 0x2c4 + 0x87f + -0xb43, ListWhatsAppsService_1[_0x1e08ff(0x19b)])(_0x414b9b);
        return _0x15642b[_0x1e08ff(0x1d0)](-0x2 * -0x413 + -0x506 * -0x1 + 0x632 * -0x2)[_0x1e08ff(0x1c4)](_0x2f3281);
    };
exports[_0x396766(0x1b5)] = index;
const store = async (_0x4ebdf7, _0x2b1a3c) => {
    const _0x422319 = _0x396766, _0x263fb2 = {};
    _0x263fb2[_0x422319(0x1b4)] = _0x422319(0x1d8);
    const _0x27a0cd = _0x263fb2, {
            name: _0xbe96b9,
            status: _0x3ef781,
            isDefault: _0x426577,
            greetingMessage: _0x53046d,
            complationMessage: _0x4e12c0,
            outOfHoursMessage: _0x15d5b9,
            queueIds: _0x315c60,
            token: _0x26db54,
            timeSendQueue: _0x810777,
            sendIdQueue: _0x4b9258,
            promptId: _0x4b9bc7,
            maxUseBotQueues: _0x2f9266,
            timeUseBotQueues: _0xb1c359,
            expiresTicket: _0x5c7edf,
            expiresInactiveMessage: _0x124aa9
        } = _0x4ebdf7[_0x422319(0x1cc)], {companyId: _0x17d8d3} = _0x4ebdf7[_0x422319(0x1bd)], _0x3b982b = {};
    _0x3b982b[_0x422319(0x182)] = _0xbe96b9, _0x3b982b[_0x422319(0x1d0)] = _0x3ef781, _0x3b982b[_0x422319(0x1d2)] = _0x426577, _0x3b982b[_0x422319(0x187) + _0x422319(0x1b3)] = _0x53046d, _0x3b982b[_0x422319(0x1c7) + _0x422319(0x1c2)] = _0x4e12c0, _0x3b982b[_0x422319(0x1c5) + _0x422319(0x1c2)] = _0x15d5b9, _0x3b982b[_0x422319(0x184)] = _0x315c60, _0x3b982b[_0x422319(0x18a)] = _0x17d8d3, _0x3b982b[_0x422319(0x186)] = _0x26db54, _0x3b982b[_0x422319(0x1b0) + _0x422319(0x194)] = _0x810777, _0x3b982b[_0x422319(0x1cf) + 'e'] = _0x4b9258, _0x3b982b[_0x422319(0x1ac)] = _0x4b9bc7, _0x3b982b[_0x422319(0x1b8) + _0x422319(0x1af)] = _0x2f9266, _0x3b982b[_0x422319(0x1a1) + _0x422319(0x19e)] = _0xb1c359, _0x3b982b[_0x422319(0x199) + _0x422319(0x19d)] = _0x5c7edf, _0x3b982b[_0x422319(0x1c8) + _0x422319(0x1dc) + 'ge'] = _0x124aa9;
    const {
        whatsapp: _0x52a077,
        oldDefaultWhatsapp: _0x4d9a01
    } = await (0x7df + 0x1fa0 + -0x277f, CreateWhatsAppService_1[_0x422319(0x19b)])(_0x3b982b);
    (-0x22d * 0x5 + -0x3a1 * -0xa + 0x1 * -0x1969, StartWhatsAppSession_1[_0x422319(0x1bf) + _0x422319(0x1c1)])(_0x52a077, _0x17d8d3);
    const _0x4ed9ce = (0x24d5 + 0x28 * -0xf6 + -0x3 * -0x89, socket_1[_0x422319(0x1a0)])(), _0x4e70de = {};
    _0x4e70de[_0x422319(0x18b)] = _0x27a0cd[_0x422319(0x1b4)], _0x4e70de[_0x422319(0x1a2)] = _0x52a077, _0x4ed9ce[_0x422319(0x18d)](_0x422319(0x1d7) + _0x17d8d3 + _0x422319(0x1d4), _0x4e70de);
    if (_0x4d9a01) {
        const _0x5cee9f = {};
        _0x5cee9f[_0x422319(0x18b)] = _0x27a0cd[_0x422319(0x1b4)], _0x5cee9f[_0x422319(0x1a2)] = _0x4d9a01, _0x4ed9ce[_0x422319(0x18d)](_0x422319(0x1d7) + _0x17d8d3 + _0x422319(0x1d4), _0x5cee9f);
    }
    return _0x2b1a3c[_0x422319(0x1d0)](-0x16b3 + -0xa13 + 0x218e)[_0x422319(0x1c4)](_0x52a077);
};
exports[_0x396766(0x1ce)] = store;
const show = async (_0x51ffb8, _0x59a18b) => {
    const _0x3a3fe3 = _0x396766, {whatsappId: _0x304a09} = _0x51ffb8[_0x3a3fe3(0x1c3)], {companyId: _0x1e7bee} = _0x51ffb8[_0x3a3fe3(0x1bd)], {session: _0x384142} = _0x51ffb8[_0x3a3fe3(0x1b9)], _0x537109 = await (0x7e1 + -0xb * -0x119 + -0x13f4, ShowWhatsAppService_1[_0x3a3fe3(0x19b)])(_0x304a09, _0x1e7bee, _0x384142);
    return _0x59a18b[_0x3a3fe3(0x1d0)](-0x13 * -0xa + -0x4 * 0x734 + 0x99e * 0x3)[_0x3a3fe3(0x1c4)](_0x537109);
};
exports[_0x396766(0x193)] = show;
const update = async (_0x40eb6f, _0x381ed6) => {
    const _0x47e441 = _0x396766, _0x5b7121 = {};
    _0x5b7121[_0x47e441(0x19a)] = _0x47e441(0x1d8);
    const _0xa5f3c1 = _0x5b7121, {whatsappId: _0x231e74} = _0x40eb6f[_0x47e441(0x1c3)], _0x2d343c = _0x40eb6f[_0x47e441(0x1cc)], {companyId: _0x3cab1f} = _0x40eb6f[_0x47e441(0x1bd)], _0x5b7b36 = {};
    _0x5b7b36[_0x47e441(0x1c0) + 'ta'] = _0x2d343c, _0x5b7b36[_0x47e441(0x196)] = _0x231e74, _0x5b7b36[_0x47e441(0x18a)] = _0x3cab1f;
    const {
            whatsapp: _0x18dbb2,
            oldDefaultWhatsapp: _0x64dcd4
        } = await (-0x1 * -0xf85 + -0x5 * -0x2d5 + -0x1dae, UpdateWhatsAppService_1[_0x47e441(0x19b)])(_0x5b7b36), _0x15967d = (0x1943 + -0x2db + 0x778 * -0x3, socket_1[_0x47e441(0x1a0)])(), _0x5f42b = {};
    _0x5f42b[_0x47e441(0x18b)] = _0xa5f3c1[_0x47e441(0x19a)], _0x5f42b[_0x47e441(0x1a2)] = _0x18dbb2, _0x15967d[_0x47e441(0x18d)](_0x47e441(0x1d7) + _0x3cab1f + _0x47e441(0x1d4), _0x5f42b);
    if (_0x64dcd4) {
        const _0x3186e7 = {};
        _0x3186e7[_0x47e441(0x18b)] = _0xa5f3c1[_0x47e441(0x19a)], _0x3186e7[_0x47e441(0x1a2)] = _0x64dcd4, _0x15967d[_0x47e441(0x18d)](_0x47e441(0x1d7) + _0x3cab1f + _0x47e441(0x1d4), _0x3186e7);
    }
    return _0x381ed6[_0x47e441(0x1d0)](0x12fc + 0x196c + -0x2ba0)[_0x47e441(0x1c4)](_0x18dbb2);
};
exports[_0x396766(0x1d8)] = update;
const remove = async (_0x5f44b6, _0x318ebe) => {
    const _0xcb2b42 = _0x396766, _0x5846ce = {};
    _0x5846ce[_0xcb2b42(0x1be)] = _0xcb2b42(0x198), _0x5846ce[_0xcb2b42(0x1b2)] = _0xcb2b42(0x188) + _0xcb2b42(0x1dd);
    const _0x25187b = _0x5846ce, {whatsappId: _0x17693e} = _0x5f44b6[_0xcb2b42(0x1c3)], {companyId: _0x3dd476} = _0x5f44b6[_0xcb2b42(0x1bd)];
    await (0x3 * -0x96d + 0x66e + 0x15d9, ShowWhatsAppService_1[_0xcb2b42(0x19b)])(_0x17693e, _0x3dd476), await (0x863 * 0x1 + 0x25e2 + 0x17 * -0x203, DeleteWhatsAppService_1[_0xcb2b42(0x19b)])(_0x17693e), (-0xc1 * 0x12 + -0x185 * -0x7 + -0x2ef * -0x1, wbot_1[_0xcb2b42(0x1b7)])(+_0x17693e);
    const _0x3c96c9 = (-0x46 * -0x6e + 0x2011 + 0x14b7 * -0x3, socket_1[_0xcb2b42(0x1a0)])(), _0x462f3c = {};
    _0x462f3c[_0xcb2b42(0x18b)] = _0x25187b[_0xcb2b42(0x1be)], _0x462f3c[_0xcb2b42(0x196)] = +_0x17693e, _0x3c96c9[_0xcb2b42(0x18d)](_0xcb2b42(0x1d7) + _0x3dd476 + _0xcb2b42(0x1d4), _0x462f3c);
    const _0x3f82e3 = {};
    return _0x3f82e3[_0xcb2b42(0x1bc)] = _0x25187b[_0xcb2b42(0x1b2)], _0x318ebe[_0xcb2b42(0x1d0)](0xe8d + 0x64 + 0x1d * -0x7d)[_0xcb2b42(0x1c4)](_0x3f82e3);
};
function _0x54f9() {
    const _0x333518 = [
        'ssion',
        'getIO',
        'timeUseBot',
        'whatsapp',
        'WhatsAppSe',
        '__importDe',
        '7uHjhYN',
        '8861950xVnlku',
        'owWhatsApp',
        'stWhatsApp',
        '33kvGrpR',
        'sService',
        'cket',
        'promptId',
        'Service/Cr',
        'eateWhatsA',
        'ueues',
        'timeSendQu',
        '428542JaNyCV',
        'LmOpb',
        'ssage',
        'tQDWy',
        'index',
        'remove',
        'removeWbot',
        'maxUseBotQ',
        'query',
        's/Whatsapp',
        'leteWhatsA',
        'message',
        'user',
        'ZXOlw',
        'StartWhats',
        'whatsappDa',
        'AppSession',
        'Message',
        'params',
        'json',
        'outOfHours',
        '__esModule',
        'complation',
        'expiresIna',
        '3903yBQgpV',
        'Service/Up',
        'Service',
        'body',
        '../service',
        'store',
        'sendIdQueu',
        'status',
        '2687815XrDLqf',
        'isDefault',
        'value',
        '-whatsapp',
        'ppService',
        'Service/Sh',
        'company-',
        'update',
        'ices/Start',
        'defineProp',
        's/WbotServ',
        'ctiveMessa',
        'eleted.',
        '4xUHedA',
        'name',
        '../libs/wb',
        'queueIds',
        '72qczrOs',
        'token',
        'greetingMe',
        'Whatsapp\x20d',
        'Service/Li',
        'companyId',
        'action',
        'erty',
        'emit',
        '../libs/so',
        'dateWhatsA',
        'session',
        '3840222YjHTcY',
        '833256fyWQhM',
        'show',
        'eue',
        '861453zXoCEi',
        'whatsappId',
        'fault',
        'delete',
        'expiresTic',
        'dWOob',
        'default',
        'Service/De',
        'ket',
        'Queues'
    ];
    _0x54f9 = function () {
        return _0x333518;
    };
    return _0x54f9();
}
exports[_0x396766(0x1b6)] = remove;