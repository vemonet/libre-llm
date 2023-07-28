import logging
import shutil
from typing import Optional

import typer
import uvicorn

from libre_llm import __version__
from libre_llm.llm import Llm
from libre_llm.llm_endpoint import LlmEndpoint
from libre_llm.utils import BOLD, END, default_conf, parse_config

cli = typer.Typer(help="Deploy API and web UI for LLMs, such as llama2, using langchain.")


@cli.command("start")
def start(
    config: str = typer.Argument(default_conf.config_path, help="Path to the libre-llm YAML configuration file"),
    # model: str = typer.Option(conf.llm.model_path, help="Path to the model binary"),
    # vector: str = typer.Option(conf.vector.vector_path, help="Path to the vector db folder"),
    host: str = typer.Option("localhost", help="Host URL"),
    port: int = typer.Option(8000, help="URL port"),
    workers: int = typer.Option(1, help="Number of workers"),
    log: str = typer.Option("info", help="Log level (info, debug, warn, error)"),
) -> None:
    logging.basicConfig(level=logging.getLevelName(log.upper()))
    conf = parse_config(config)
    llm = Llm(conf=conf)
    app = LlmEndpoint(llm=llm, conf=conf)
    log_config = uvicorn.config.LOGGING_CONFIG
    log_config["formatters"]["access"]["fmt"] = "%(levelprefix)s [%(asctime)s] [%(module)s:%(funcName)s] %(message)s"
    log_config["formatters"]["default"]["fmt"] = "%(levelprefix)s [%(asctime)s] [%(module)s:%(funcName)s] %(message)s"
    uvicorn.run(
        app,
        host=host,
        port=port,
        reload=False,
        log_level=log,
        workers=workers,
        log_config=log_config,
    )


@cli.command("build")
def build(
    config: str = typer.Argument(default_conf.config_path, help="Path to the libre-llm YAML configuration file"),
    vector: Optional[str] = typer.Option(None, help="Path to the vector db folder"),
    documents: Optional[str] = typer.Option(None, help="Path to the folder containing documents to vectorize"),
    log: str = typer.Option("info", help="Log level (info, debug, warn, error)"),
) -> None:
    logging.basicConfig(level=logging.getLevelName(log.upper()))
    conf = parse_config(config)
    if vector:
        conf.vector.vector_path = vector
    if documents:
        conf.vector.documents_path = documents
    print(f"Vectorizing documents from {BOLD}{documents}{END} as vectorstore in {conf.vector.vector_path}")
    shutil.rmtree(conf.vector.vector_path)
    llm = Llm(conf=conf)
    llm.build_vectorstore()
    print(f"Documents successfully vectorized in {BOLD}{conf.vector.vector_path}{END}")


@cli.command("version")
def version() -> None:
    print(__version__)


if __name__ == "__main__":
    cli()
