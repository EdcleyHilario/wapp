'use strict';
function _0x1398(_0x6e0c04, _0x144f46) {
    const _0x3b86ab = _0x3b3f();
    return _0x1398 = function (_0x4658d8, _0x399cce) {
        _0x4658d8 = _0x4658d8 - (-0x1f * -0xb + -0x5a8 + 0x575);
        let _0x490a13 = _0x3b86ab[_0x4658d8];
        return _0x490a13;
    }, _0x1398(_0x6e0c04, _0x144f46);
}
const _0x31c9be = _0x1398;
(function (_0xa011d0, _0x35db87) {
    const _0x492424 = _0x1398, _0x431448 = _0xa011d0();
    while (!![]) {
        try {
            const _0x4c7bf2 = parseInt(_0x492424(0x143)) / (0x20b7 + 0x2030 + -0x27 * 0x1aa) * (parseInt(_0x492424(0x137)) / (0x2 * -0x20 + 0xd * 0x16e + -0x1254 * 0x1)) + parseInt(_0x492424(0x145)) / (-0x1 * 0x1e26 + -0x1 * 0x114d + 0x2f76) * (parseInt(_0x492424(0x12d)) / (-0x13ce + -0x899 * 0x1 + -0x979 * -0x3)) + parseInt(_0x492424(0x13f)) / (-0xa * 0xa + 0x128b + -0x1222) + parseInt(_0x492424(0x12c)) / (-0x548 * 0x7 + 0x49f + 0x205f) * (-parseInt(_0x492424(0x13c)) / (0x20f2 + 0x1 * -0x95f + -0x178c)) + -parseInt(_0x492424(0x142)) / (0x23ce * 0x1 + -0xd17 + -0x16af) + -parseInt(_0x492424(0x122)) / (0x78 + 0x24 * 0xd9 + -0x1ef3) * (parseInt(_0x492424(0x138)) / (0x2a5 * 0x3 + 0x1 * -0x1e1 + 0x5 * -0x134)) + -parseInt(_0x492424(0x13a)) / (-0x5d * -0x32 + 0x225f + -0x347e) * (-parseInt(_0x492424(0x146)) / (0xbba + 0xf33 + -0x1ae1));
            if (_0x4c7bf2 === _0x35db87)
                break;
            else
                _0x431448['push'](_0x431448['shift']());
        } catch (_0x21714a) {
            _0x431448['push'](_0x431448['shift']());
        }
    }
}(_0x3b3f, -0x51e9 * 0x2 + 0x27db9 * 0x1 + -0x1 * -0x3fb35));
function _0x3b3f() {
    const _0x21f339 = [
        'xwvOE',
        'TEXT',
        '454740OZuadY',
        '__esModule',
        'autoIncrem',
        '1632104bBtsGH',
        '54awPfNp',
        'CxLJL',
        '221865AJaFEW',
        '12nldevc',
        '45lqnyzZ',
        'ent',
        'dropTable',
        'STRING',
        'exports',
        'CASCADE',
        'allowNull',
        'type',
        'DataTypes',
        'value',
        '6RLSTpA',
        '16WNHniy',
        'DATE',
        'primaryKey',
        'pBLDa',
        'defineProp',
        'sequelize',
        'Companies',
        'eBcpO',
        'INTEGER',
        'Files',
        '20452nDSZQf',
        '406650GhsPCX',
        'erty',
        '5869039LqQJIO',
        'createTabl',
        '4780629NbZiKl'
    ];
    _0x3b3f = function () {
        return _0x21f339;
    };
    return _0x3b3f();
}
const _0x4d1a3b = {};
_0x4d1a3b[_0x31c9be(0x12b)] = !![], Object[_0x31c9be(0x131) + _0x31c9be(0x139)](exports, _0x31c9be(0x140), _0x4d1a3b);
const sequelize_1 = require(_0x31c9be(0x132));
module[_0x31c9be(0x126)] = {
    'up': _0x293de8 => {
        const _0x3ddf53 = _0x31c9be, _0xbdbe92 = {};
        _0xbdbe92[_0x3ddf53(0x130)] = _0x3ddf53(0x136), _0xbdbe92[_0x3ddf53(0x144)] = _0x3ddf53(0x133), _0xbdbe92[_0x3ddf53(0x13d)] = _0x3ddf53(0x127);
        const _0x3ad9f4 = _0xbdbe92, _0x392d16 = {};
        return _0x392d16[_0x3ddf53(0x129)] = sequelize_1[_0x3ddf53(0x12a)][_0x3ddf53(0x135)], _0x392d16[_0x3ddf53(0x141) + _0x3ddf53(0x123)] = !![], _0x392d16[_0x3ddf53(0x12f)] = !![], _0x392d16[_0x3ddf53(0x128)] = ![], _0x293de8[_0x3ddf53(0x13b) + 'e'](_0x3ad9f4[_0x3ddf53(0x130)], {
            'id': _0x392d16,
            'companyId': {
                'type': sequelize_1[_0x3ddf53(0x12a)][_0x3ddf53(0x135)],
                'references': {
                    'model': _0x3ad9f4[_0x3ddf53(0x144)],
                    'key': 'id'
                },
                'onUpdate': _0x3ad9f4[_0x3ddf53(0x13d)],
                'onDelete': _0x3ad9f4[_0x3ddf53(0x13d)],
                'allowNull': ![]
            },
            'name': {
                'type': sequelize_1[_0x3ddf53(0x12a)][_0x3ddf53(0x125)],
                'allowNull': ![]
            },
            'message': {
                'type': sequelize_1[_0x3ddf53(0x12a)][_0x3ddf53(0x13e)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[_0x3ddf53(0x12a)][_0x3ddf53(0x12e)](-0x1 * -0x190b + 0x19 * -0xe5 + -0x2a8),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[_0x3ddf53(0x12a)][_0x3ddf53(0x12e)](0x6 * 0x116 + -0x165 + -0x519),
                'allowNull': ![]
            }
        });
    },
    'down': _0x21e9ce => {
        const _0x23f3b6 = _0x31c9be, _0x582f50 = {};
        _0x582f50[_0x23f3b6(0x134)] = _0x23f3b6(0x136);
        const _0x5aa4ca = _0x582f50;
        return _0x21e9ce[_0x23f3b6(0x124)](_0x5aa4ca[_0x23f3b6(0x134)]);
    }
};