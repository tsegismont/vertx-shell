/*
 * Copyright 2014 Red Hat, Inc.
 *
 * Red Hat licenses this file to you under the Apache License, version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License.  You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/** @module vertx-shell-js/command_manager */
var utils = require('vertx-js/util/utils');
var Command = require('vertx-shell-js/command');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JCommandManager = io.vertx.ext.shell.command.CommandManager;

/**

 @class
*/
var CommandManager = function(j_val) {

  var j_commandManager = j_val;
  var that = this;

  /**

   @public
   @param command {Command} 
   @param handler {function} 
   */
  this.addCommand = function(command, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'function') {
      j_commandManager["addCommand(io.vertx.ext.shell.command.Command,io.vertx.core.Handler)"](command._jdel, function(ar) {
      if (ar.succeeded()) {
        handler(null, null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else utils.invalidArgs();
  };

  /**

   @public

   */
  this.close = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_commandManager["close()"]();
    } else utils.invalidArgs();
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_commandManager;
};

/**

 @memberof module:vertx-shell-js/command_manager
 @param vertx {Vertx} 
 @return {CommandManager}
 */
CommandManager.create = function(vertx) {
  var __args = arguments;
  if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
    return utils.convReturnVertxGen(JCommandManager["create(io.vertx.core.Vertx)"](vertx._jdel), CommandManager);
  } else utils.invalidArgs();
};

// We export the Constructor function
module.exports = CommandManager;