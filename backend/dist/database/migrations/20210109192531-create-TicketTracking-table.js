'use strict';
const _0x2ea80a = _0x99ce;
(function (_0x21deba, _0x187a74) {
    const _0x203437 = _0x99ce, _0x414db1 = _0x21deba();
    while (!![]) {
        try {
            const _0x581e56 = -parseInt(_0x203437(0x1d5)) / (-0x1630 + -0xdf9 + -0x607 * -0x6) * (-parseInt(_0x203437(0x1db)) / (0xea0 + -0xbb3 + -0x53 * 0x9)) + parseInt(_0x203437(0x1df)) / (-0x1547 * 0x1 + -0x754 + -0x12 * -0x197) + parseInt(_0x203437(0x1ca)) / (-0x169f + 0x23d1 + 0x7 * -0x1e2) * (parseInt(_0x203437(0x1de)) / (-0x1 * -0x1f9d + 0x946 + -0x28de * 0x1)) + parseInt(_0x203437(0x1be)) / (0xb * 0x101 + -0x4 * 0x195 + -0x1 * 0x4b1) + parseInt(_0x203437(0x1d4)) / (0x9ef + 0x7c * 0x29 + -0x1dc4) + parseInt(_0x203437(0x1c1)) / (-0x36 * 0x22 + 0x149 * 0x11 + -0xea5) * (parseInt(_0x203437(0x1c4)) / (-0x99 * 0x13 + -0x9 * -0x5b + 0x831)) + -parseInt(_0x203437(0x1d3)) / (-0x151f + 0x6ff + 0xe2a) * (parseInt(_0x203437(0x1c7)) / (-0x1c3a + -0xe72 * -0x1 + -0x1 * -0xdd3));
            if (_0x581e56 === _0x187a74)
                break;
            else
                _0x414db1['push'](_0x414db1['shift']());
        } catch (_0x2cfb26) {
            _0x414db1['push'](_0x414db1['shift']());
        }
    }
}(_0x3f6d, -0xc6c1a + 0x1 * 0x3a7a0 + 0xfbde6));
const _0x518384 = {};
_0x518384[_0x2ea80a(0x1e3)] = !![], Object[_0x2ea80a(0x1cf) + _0x2ea80a(0x1ce)](exports, _0x2ea80a(0x1bd), _0x518384);
const sequelize_1 = require(_0x2ea80a(0x1e1));
function _0x99ce(_0x2176ea, _0x3393e2) {
    const _0x143cf4 = _0x3f6d();
    return _0x99ce = function (_0x26fa05, _0x3cfc21) {
        _0x26fa05 = _0x26fa05 - (-0x256 * 0xa + 0x1 * 0x13f3 + 0x524);
        let _0xa15142 = _0x143cf4[_0x26fa05];
        return _0xa15142;
    }, _0x99ce(_0x2176ea, _0x3393e2);
}
module[_0x2ea80a(0x1bf)] = {
    'up': _0x1de50b => {
        const _0x49bc0c = _0x2ea80a, _0x1eaef6 = {};
        _0x1eaef6[_0x49bc0c(0x1d9)] = _0x49bc0c(0x1e2) + _0x49bc0c(0x1c3), _0x1eaef6[_0x49bc0c(0x1dc)] = _0x49bc0c(0x1d1), _0x1eaef6[_0x49bc0c(0x1da)] = _0x49bc0c(0x1c2), _0x1eaef6[_0x49bc0c(0x1cc)] = _0x49bc0c(0x1c9), _0x1eaef6[_0x49bc0c(0x1bc)] = _0x49bc0c(0x1c5), _0x1eaef6[_0x49bc0c(0x1d0)] = _0x49bc0c(0x1d2);
        const _0x3eb847 = _0x1eaef6, _0x1e480b = {};
        return _0x1e480b[_0x49bc0c(0x1dd)] = sequelize_1[_0x49bc0c(0x1bb)][_0x49bc0c(0x1e0)], _0x1e480b[_0x49bc0c(0x1d8) + _0x49bc0c(0x1d7)] = !![], _0x1e480b[_0x49bc0c(0x1c0)] = !![], _0x1e480b[_0x49bc0c(0x1c8)] = ![], _0x1de50b[_0x49bc0c(0x1cb) + 'e'](_0x3eb847[_0x49bc0c(0x1d9)], {
            'id': _0x1e480b,
            'ticketId': {
                'type': sequelize_1[_0x49bc0c(0x1bb)][_0x49bc0c(0x1e0)],
                'references': {
                    'model': _0x3eb847[_0x49bc0c(0x1dc)],
                    'key': 'id'
                },
                'onDelete': _0x3eb847[_0x49bc0c(0x1da)]
            },
            'companyId': {
                'type': sequelize_1[_0x49bc0c(0x1bb)][_0x49bc0c(0x1e0)],
                'references': {
                    'model': _0x3eb847[_0x49bc0c(0x1cc)],
                    'key': 'id'
                },
                'onDelete': _0x3eb847[_0x49bc0c(0x1da)]
            },
            'whatsappId': {
                'type': sequelize_1[_0x49bc0c(0x1bb)][_0x49bc0c(0x1e0)],
                'references': {
                    'model': _0x3eb847[_0x49bc0c(0x1bc)],
                    'key': 'id'
                },
                'onDelete': _0x3eb847[_0x49bc0c(0x1da)],
                'allowNull': !![]
            },
            'userId': {
                'type': sequelize_1[_0x49bc0c(0x1bb)][_0x49bc0c(0x1e0)],
                'references': {
                    'model': _0x3eb847[_0x49bc0c(0x1d0)],
                    'key': 'id'
                },
                'onDelete': _0x3eb847[_0x49bc0c(0x1da)],
                'allowNull': !![]
            },
            'createdAt': {
                'type': sequelize_1[_0x49bc0c(0x1bb)][_0x49bc0c(0x1d6)],
                'allowNull': !![]
            },
            'updatedAt': {
                'type': sequelize_1[_0x49bc0c(0x1bb)][_0x49bc0c(0x1d6)],
                'allowNull': !![]
            },
            'queuedAt': {
                'type': sequelize_1[_0x49bc0c(0x1bb)][_0x49bc0c(0x1d6)],
                'allowNull': !![]
            },
            'startedAt': {
                'type': sequelize_1[_0x49bc0c(0x1bb)][_0x49bc0c(0x1d6)],
                'allowNull': !![]
            },
            'finishedAt': {
                'type': sequelize_1[_0x49bc0c(0x1bb)][_0x49bc0c(0x1d6)],
                'allowNull': !![]
            }
        });
    },
    'down': _0x42cde7 => {
        const _0x9cbf87 = _0x2ea80a, _0x59a15c = {};
        _0x59a15c[_0x9cbf87(0x1c6)] = _0x9cbf87(0x1e2) + _0x9cbf87(0x1c3);
        const _0x1012e2 = _0x59a15c;
        return _0x42cde7[_0x9cbf87(0x1cd)](_0x1012e2[_0x9cbf87(0x1c6)]);
    }
};
function _0x3f6d() {
    const _0x3c2c9d = [
        '1945732UlOsZU',
        'createTabl',
        'pzCFJ',
        'dropTable',
        'erty',
        'defineProp',
        'IbMwS',
        'Tickets',
        'Users',
        '40bXJRQX',
        '2769116MoikRB',
        '3751XHYSuZ',
        'DATE',
        'ent',
        'autoIncrem',
        'fdwlN',
        'Qptgq',
        '278UZgxoy',
        'zdLUc',
        'type',
        '5OiPeKx',
        '747930aUzMVF',
        'INTEGER',
        'sequelize',
        'TicketTrak',
        'value',
        'DataTypes',
        'rBavJ',
        '__esModule',
        '979830aJISQg',
        'exports',
        'primaryKey',
        '8WMTQdB',
        'SET\x20NULL',
        'ing',
        '3198051qFUIKz',
        'Whatsapps',
        'myxaY',
        '4714314hqZOjU',
        'allowNull',
        'Companies'
    ];
    _0x3f6d = function () {
        return _0x3c2c9d;
    };
    return _0x3f6d();
}