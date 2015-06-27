package io.vertx.ext.shell;

import io.vertx.codegen.annotations.VertxGen;
import io.vertx.core.Handler;

/**
 * @author <a href="mailto:julien@julienviet.com">Julien Viet</a>
 */
@VertxGen
public interface Process {

  Stream stdin();

  void setStdout(Stream stdout);

  void run();

  void run(Handler<Void> beginHandler);

  void sendSignal(Signal signal);

  void endHandler(Handler<Integer> handler);

}