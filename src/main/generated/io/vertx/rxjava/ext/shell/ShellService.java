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

package io.vertx.rxjava.ext.shell;

import java.util.Map;
import io.vertx.lang.rxjava.InternalHelper;
import rx.Observable;
import io.vertx.ext.shell.ShellServiceOptions;
import io.vertx.rxjava.core.Vertx;
import io.vertx.core.AsyncResult;
import io.vertx.core.Handler;

/**
 * @author <a href="mailto:julien@julienviet.com">Julien Viet</a>
 *
 * <p/>
 * NOTE: This class has been automatically generated from the {@link io.vertx.ext.shell.ShellService original} non RX-ified interface using Vert.x codegen.
 */

public class ShellService {

  final io.vertx.ext.shell.ShellService delegate;

  public ShellService(io.vertx.ext.shell.ShellService delegate) {
    this.delegate = delegate;
  }

  public Object getDelegate() {
    return delegate;
  }

  public static ShellService create(Vertx vertx, ShellServiceOptions options) { 
    ShellService ret= ShellService.newInstance(io.vertx.ext.shell.ShellService.create((io.vertx.core.Vertx) vertx.getDelegate(), options));
    return ret;
  }

  public void start() { 
    this.delegate.start();
  }

  public void start(Handler<AsyncResult<Void>> startHandler) { 
    this.delegate.start(startHandler);
  }

  public Observable<Void> startObservable() { 
    io.vertx.rx.java.ObservableFuture<Void> startHandler = io.vertx.rx.java.RxHelper.observableFuture();
    start(startHandler.toHandler());
    return startHandler;
  }

  public void close(Handler<AsyncResult<Void>> closeHandler) { 
    this.delegate.close(closeHandler);
  }

  public Observable<Void> closeObservable() { 
    io.vertx.rx.java.ObservableFuture<Void> closeHandler = io.vertx.rx.java.RxHelper.observableFuture();
    close(closeHandler.toHandler());
    return closeHandler;
  }


  public static ShellService newInstance(io.vertx.ext.shell.ShellService arg) {
    return arg != null ? new ShellService(arg) : null;
  }
}