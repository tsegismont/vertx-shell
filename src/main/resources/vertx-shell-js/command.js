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

/** @module vertx-shell-js/command */
var utils = require('vertx-js/util/utils');
var Execution = require('vertx-shell-js/execution');
var Option = require('vertx-shell-js/option');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JCommand = io.vertx.ext.shell.command.Command;

/**

 @class
*/
var Command = function(j_val) {

  var j_command = j_val;
  var that = this;

  /**

   @public
   @param option {Option} 
   @return {Command}
   */
  this.option = function(option) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_command["option(io.vertx.ext.shell.command.Option)"](option._jdel);
      return that;
    } else utils.invalidArgs();
  };

  /**

   @public

   @return {string}
   */
  this.name = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_command["name()"]();
    } else utils.invalidArgs();
  };

  /**

   @public
   @param handler {function} 
   */
  this.setExecuteHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_command["setExecuteHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnVertxGen(jVal, Execution));
    });
    } else utils.invalidArgs();
  };

  /**

   @public

   */
  this.unregister = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_command["unregister()"]();
    } else utils.invalidArgs();
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_command;
};

/**

 @memberof module:vertx-shell-js/command
 @param name {string} 
 @return {Command}
 */
Command.create = function(name) {
  var __args = arguments;
  if (__args.length === 1 && typeof __args[0] === 'string') {
    return utils.convReturnVertxGen(JCommand["create(java.lang.String)"](name), Command);
  } else utils.invalidArgs();
};

// We export the Constructor function
module.exports = Command;