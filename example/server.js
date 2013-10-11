/*
 * This file is part of:
 *
 * Filmstrip.js: an HTML5 video preview widget that will rock your world
 *   Copyright © <2013> Instituto Nacional de Associativismo y Economia Social.
 *   Copyright © <2013> Cooperativa de Trabajo OpCode Limitada <info@opcode.coop>.
 *   Copyright © <2013> Leonardo Vidarte <leo@opcode.coop>
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Affero General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Affero General Public License for more details.
 *
 *  You should have received a copy of the GNU Affero General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var connect = require('connect');
connect.createServer(
    connect.static(__dirname)
).listen(8080, '0.0.0.0');
console.log('go to http://localhost:8080/filmstrip.html')
