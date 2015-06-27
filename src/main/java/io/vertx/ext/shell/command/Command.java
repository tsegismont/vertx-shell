package io.vertx.ext.shell.command;

import io.vertx.codegen.annotations.Fluent;
import io.vertx.codegen.annotations.VertxGen;
import io.vertx.core.Handler;
import io.vertx.ext.shell.command.impl.CommandImpl;

/**
 * @author <a href="mailto:julien@julienviet.com">Julien Viet</a>
 */
@VertxGen
public interface Command {

  static Command create(String name) {
    return new CommandImpl(name);
  }

  @Fluent
  Command option(Option option);

  String name();

  void setExecuteHandler(Handler<Execution> handler);

  void unregister();

}