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

/** @module vertx-shell-js/command_pack */
var utils = require('vertx-js/util/utils');
var Command = require('vertx-shell-js/command');
var Vertx = require('vertx-js/vertx');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JCommandPack = io.vertx.ext.shell.command.CommandPack;

/**
 A command pack is a set of commands, for instance the base command pack, the metrics command pack, etc...

 @class
*/
var CommandPack = function(j_val) {

  var j_commandPack = j_val;
  var that = this;

  /**
   Lookup commands.

   @public
   @param vertx {Vertx} the vertx instance 
   @param commandsHandler {function} the handler that will receive the lookup callback 
   */
  this.lookupCommands = function(vertx, commandsHandler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'function') {
      j_commandPack["lookupCommands(io.vertx.core.Vertx,io.vertx.core.Handler)"](vertx._jdel, function(ar) {
      if (ar.succeeded()) {
        commandsHandler(utils.convReturnListSetVertxGen(ar.result(), Command), null);
      } else {
        commandsHandler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_commandPack;
};

// We export the Constructor function
module.exports = CommandPack;