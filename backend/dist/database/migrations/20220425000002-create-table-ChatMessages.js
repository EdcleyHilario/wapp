'use strict';
const _0x518ef3 = _0x25e9;
(function (_0x385512, _0x27c416) {
    const _0x1ab5fc = _0x25e9, _0x3480c2 = _0x385512();
    while (!![]) {
        try {
            const _0x2b6488 = -parseInt(_0x1ab5fc(0x11c)) / (0x9ff + 0x1 * -0x130d + 0x1 * 0x90f) * (parseInt(_0x1ab5fc(0x121)) / (-0x24b1 + 0xe * 0xaf + 0x90b * 0x3)) + -parseInt(_0x1ab5fc(0x128)) / (0x2 * 0x10e2 + 0x713 + -0x4e * 0x86) + parseInt(_0x1ab5fc(0x115)) / (-0x7a * -0x51 + 0x184b + -0x3ee1) * (-parseInt(_0x1ab5fc(0x119)) / (0x1f * -0x141 + 0x2 * -0x10c7 + 0x4872)) + -parseInt(_0x1ab5fc(0x111)) / (-0x1832 * -0x1 + -0x1923 + 0xf7) + -parseInt(_0x1ab5fc(0x125)) / (-0x1473 + 0x7 * 0x20e + -0x1 * -0x618) * (parseInt(_0x1ab5fc(0x10a)) / (-0x2a7 + 0x384 + -0x3 * 0x47)) + parseInt(_0x1ab5fc(0x11d)) / (0xf7e + 0x13f + 0x10b4 * -0x1) + parseInt(_0x1ab5fc(0x113)) / (0x19 * -0x16 + -0x8ef * 0x4 + 0x25ec);
            if (_0x2b6488 === _0x27c416)
                break;
            else
                _0x3480c2['push'](_0x3480c2['shift']());
        } catch (_0xbdb3e0) {
            _0x3480c2['push'](_0x3480c2['shift']());
        }
    }
}(_0x5e7d, 0x499bd * -0x3 + -0xcbf35 * 0x1 + -0x8768 * -0x42));
function _0x5e7d() {
    const _0x1b2a40 = [
        'defineProp',
        'TEXT',
        'allowNull',
        '56AUkkaA',
        'Chats',
        'value',
        '644748oDucSs',
        'Dccuy',
        'Users',
        'ChatMessag',
        'autoIncrem',
        'sequelize',
        '244352KmCCmG',
        'zQSYl',
        '__esModule',
        'type',
        'createTabl',
        'gymSH',
        'erty',
        '1443480reuaxn',
        'DATE',
        '23474910Cjniol',
        'DataTypes',
        '12YQrIrE',
        'dropTable',
        'ent',
        'ckEJf',
        '1820945gZnmHd',
        'primaryKey',
        'CASCADE',
        '244YgExHe',
        '7922628LUZQjv',
        'exports',
        'INTEGER',
        'ZnBAy',
        '7274ENvQdb'
    ];
    _0x5e7d = function () {
        return _0x1b2a40;
    };
    return _0x5e7d();
}
function _0x25e9(_0x10a07f, _0x576273) {
    const _0x5ea962 = _0x5e7d();
    return _0x25e9 = function (_0x11ab1e, _0x1cf348) {
        _0x11ab1e = _0x11ab1e - (-0x1 * 0x2dd + 0x3 * -0xb89 + 0x2680);
        let _0x226741 = _0x5ea962[_0x11ab1e];
        return _0x226741;
    }, _0x25e9(_0x10a07f, _0x576273);
}
const _0x36a856 = {};
_0x36a856[_0x518ef3(0x127)] = !![], Object[_0x518ef3(0x122) + _0x518ef3(0x110)](exports, _0x518ef3(0x10c), _0x36a856);
const sequelize_1 = require(_0x518ef3(0x109));
module[_0x518ef3(0x11e)] = {
    'up': _0x44c25f => {
        const _0x462bba = _0x518ef3, _0x2907e9 = {};
        _0x2907e9[_0x462bba(0x129)] = _0x462bba(0x12b) + 'es', _0x2907e9[_0x462bba(0x118)] = _0x462bba(0x126), _0x2907e9[_0x462bba(0x10f)] = _0x462bba(0x11b), _0x2907e9[_0x462bba(0x120)] = _0x462bba(0x12a);
        const _0x55cc96 = _0x2907e9, _0x59a2ee = {};
        return _0x59a2ee[_0x462bba(0x10d)] = sequelize_1[_0x462bba(0x114)][_0x462bba(0x11f)], _0x59a2ee[_0x462bba(0x108) + _0x462bba(0x117)] = !![], _0x59a2ee[_0x462bba(0x11a)] = !![], _0x59a2ee[_0x462bba(0x124)] = ![], _0x44c25f[_0x462bba(0x10e) + 'e'](_0x55cc96[_0x462bba(0x129)], {
            'id': _0x59a2ee,
            'chatId': {
                'type': sequelize_1[_0x462bba(0x114)][_0x462bba(0x11f)],
                'references': {
                    'model': _0x55cc96[_0x462bba(0x118)],
                    'key': 'id'
                },
                'onUpdate': _0x55cc96[_0x462bba(0x10f)],
                'onDelete': _0x55cc96[_0x462bba(0x10f)],
                'allowNull': ![]
            },
            'senderId': {
                'type': sequelize_1[_0x462bba(0x114)][_0x462bba(0x11f)],
                'references': {
                    'model': _0x55cc96[_0x462bba(0x120)],
                    'key': 'id'
                },
                'onUpdate': _0x55cc96[_0x462bba(0x10f)],
                'onDelete': _0x55cc96[_0x462bba(0x10f)],
                'allowNull': ![]
            },
            'message': {
                'type': sequelize_1[_0x462bba(0x114)][_0x462bba(0x123)],
                'allowNull': !![],
                'defaultValue': ''
            },
            'mediaPath': {
                'type': sequelize_1[_0x462bba(0x114)][_0x462bba(0x123)],
                'allowNull': !![]
            },
            'mediaName': {
                'type': sequelize_1[_0x462bba(0x114)][_0x462bba(0x123)],
                'allowNull': !![]
            },
            'createdAt': {
                'type': sequelize_1[_0x462bba(0x114)][_0x462bba(0x112)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[_0x462bba(0x114)][_0x462bba(0x112)],
                'allowNull': ![]
            }
        });
    },
    'down': _0x4d40a7 => {
        const _0x4c0cda = _0x518ef3, _0x5c4f9c = {};
        _0x5c4f9c[_0x4c0cda(0x10b)] = _0x4c0cda(0x12b) + 'es';
        const _0x88863f = _0x5c4f9c;
        return _0x4d40a7[_0x4c0cda(0x116)](_0x88863f[_0x4c0cda(0x10b)]);
    }
};